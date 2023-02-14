import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from './action-types';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from './services/user.service';
import { of } from 'rxjs';
import { SubordinateDto } from './models/subordinateDto.model';
import { Store } from '@ngrx/store';

@Injectable()
export class UserEffects {

  loadSubordinates$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.LoadSubordinates),
    mergeMap(() => this.userService.loadSubordinates()
      .pipe(
        map((response:SubordinateDto) =>  UserActions.SubordinatesLoaded({subordinates: response.data})),
        catchError(() => of(UserActions.SubordinatesFaild))
      ))
    )
  );

  constructor(private actions$: Actions,private userService:UserService, private store :Store) {}
}
