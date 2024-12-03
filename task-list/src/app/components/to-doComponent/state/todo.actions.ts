import { createAction, props } from '@ngrx/store';

export const create = createAction('[TO-DO] Create task', props<{text:string}>());
export const editToggle = createAction('[TO-DO] Edit toggle', props<{id:number}>());
export const editInputItem = createAction('[TO-DO] Edit task', props<{text:string}>());

