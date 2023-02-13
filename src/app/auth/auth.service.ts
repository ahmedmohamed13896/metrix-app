import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./model/user.model";




@Injectable()
export class AuthService {
    USER_KEY: string = 'user';

    constructor(private http:HttpClient) {
    }

    login(email:string, password:string): Observable<User> {
        const formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);
        return this.http.post<User>('http://194.163.169.47:5000/login.php', formData);
    }

    getToken(): string {
      let user:any = localStorage.getItem(this.USER_KEY);
      let _token = JSON.parse(user)?.data?.accessToken;
      return _token;
    }

}
