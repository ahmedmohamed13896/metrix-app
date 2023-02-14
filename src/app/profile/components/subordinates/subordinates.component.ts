import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subordinate } from '../../models/subordinate.model';
import { SubordinatesState } from '../../reducers';
import { map, tap } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { UserActions } from '../../action-types';
import { Observable } from 'rxjs';
import { Subordinates } from '../../user.selectors';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent implements OnInit{
  subordinates$: Observable<Subordinate[]> = this.store.pipe(select(Subordinates));

  constructor(private store: Store<SubordinatesState>){}

  ngOnInit(): void {
    this.loadSubordinates();
  }

  loadSubordinates() {
    this.store.dispatch(UserActions.LoadSubordinates())
  }
}
