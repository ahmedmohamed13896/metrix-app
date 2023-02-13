import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from '../../reducers';
import { login } from '../auth.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ['admin@admin.com', [Validators.required]],
      password: ['password', [Validators.required]],
    });
  }

  ngOnInit() {}
  login() {
    const val = this.form.value;
    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          this.store.dispatch(login({ user }));
          this.router.navigateByUrl('/user-profile');
        })
      )
      .subscribe(noop, () => alert('Login Failed'));
  }
}
