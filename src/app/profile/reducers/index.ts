import { createReducer, on
} from '@ngrx/store';
import { UserActions } from '../action-types';
import { Subordinate } from '../models/subordinate.model';



export interface SubordinatesState {
    subordinates: Subordinate[]
}

export const initialSubordinatesState: SubordinatesState = {
  subordinates: []
};

export const subordinatesReducer = createReducer(
  initialSubordinatesState,
  on(UserActions.LoadSubordinates, (state, action) => ({...state, subordinates: state.subordinates })),
  on(UserActions.SubordinatesLoaded, (state, action) => ({...state, subordinates: action.subordinates })),
);

