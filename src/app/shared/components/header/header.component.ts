import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/auth.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private store: Store<AppState> ){}
  logout() {
    this.store.dispatch(logout());
  }
}
