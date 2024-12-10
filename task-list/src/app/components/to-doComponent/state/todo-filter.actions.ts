import { createAction, props } from '@ngrx/store';


export const setFilter = createAction(
  '[TODO-Filter] Set filter',
  props<{ filter: string }>()
);
