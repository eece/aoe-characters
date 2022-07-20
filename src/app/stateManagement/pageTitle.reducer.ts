import { createReducer, on } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { changeTitle } from './pageTitle.actions';

export const initialState = 'Home';

export const changeTitleReducer = createReducer(
  initialState,
  on(changeTitle, (state, title) => {
    const newState: string = title.value;
    return newState;
}),
);

