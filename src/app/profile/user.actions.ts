import { createAction, props } from '@ngrx/store';

export const getSubordinates = createAction(
  '[Subordinates Page] User Subordinates',
  props<any>()
);

