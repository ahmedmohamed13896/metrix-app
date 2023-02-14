import { createAction, props } from '@ngrx/store';
import { Subordinate } from './models/subordinate.model';

export const LoadSubordinates = createAction(
  '[Subordinates API] Load Subordinates'
);

export const SubordinatesLoaded = createAction(
  '[Subordinates API] Subordinates Loaded Success', props<{subordinates: Subordinate[]}>()
);
export const SubordinatesFaild = createAction(
  '[Subordinates API] Subordinates Loaded Failed',(error: Error) => ({ error })
);
