import { createAction, props } from '@ngrx/store';

export const create = createAction('[TO-DO] Create task', props<{text:string}>());
export const editToggle = createAction('[TO-DO] Edit toggle', props<{id:number}>());
export const editInputItem = createAction('[TO-DO] Edit task', props<{id:number,text:string}>());
export const deleteAllTask = createAction('[TO-DO] Delete all task completed');
export const deleteTask = createAction('[TO-DO] Delete task', props<{id:number}>());
export const toggleAll = createAction('[TO-DO] Toggle all task completed');

