import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./models/to-do/todo.model";
import { _todoReducer } from "./components/to-doComponent/state/todo.reducer";
import { _filterReducer } from "./components/to-doComponent/state/todo-filter.reducer";

export interface AppState {
  todos: Todo[];
  filters: string;
}

export const _appReducers: ActionReducerMap<AppState> = {
  todos: _todoReducer,
  filters: _filterReducer,
};