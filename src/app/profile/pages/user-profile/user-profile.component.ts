import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { getSubordinates } from '../../user.actions';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
  }
}
