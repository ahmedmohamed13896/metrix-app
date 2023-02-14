import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SubordinatesState} from './reducers';


export const selectSubordinatesState =
    createFeatureSelector<SubordinatesState>("subordinates");


export const Subordinates = createSelector(
    selectSubordinatesState,
    state =>  state.subordinates
);

