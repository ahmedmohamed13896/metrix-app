import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/reducers';
import { getSubordinates } from '../../user.actions';
import { UserService } from '../../services/user.service';
import { Subordinate } from '../../models/subordinate.model';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent implements OnInit{
  subordinates: Subordinate[] = [];

  constructor(
    private store: Store<AppState>,
    private userService:UserService){
  }
  ngOnInit(): void {
    this.getSubordinates();
  }
  getSubordinates() {
    this.userService.getSubOrdinaties().pipe(
      tap((res) => {
        this.store.dispatch(getSubordinates(res.data));
        this.subordinates = res.data;
      })
    ).subscribe(noop, () => {
      console.log('subordinates Loaded');
    });

  }
}
