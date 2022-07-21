import { createAction, props } from '@ngrx/store';
export const changeTitle = createAction('Change Title', props<ITitle>());

export interface ITitle {
    value: string;
}
