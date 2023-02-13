import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

const TOKEN_HEADER_KEY = 'Authorization';        // for Spring Boot back-end
// const TOKEN_HEADER_KEY = 'auth_data';          // for Node.js Express back-end

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = this.authService.getToken();
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && !authReq.url.includes('/login') && error.status === 401) {
        this.router.navigateByUrl('/login');
      }
      return throwError(error);
    }));
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    /* for Spring Boot back-end */
    return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

    /* for Node.js Express back-end */
    // return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token) });
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
