import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserActions } from './action-types';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  getSubordinates$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.getSubordinates),
        tap((action) =>{
            console.log('action effect ',action);
        })
      ),
    { dispatch: false }
  );


  constructor(private actions$: Actions, private router: Router) {}
}
