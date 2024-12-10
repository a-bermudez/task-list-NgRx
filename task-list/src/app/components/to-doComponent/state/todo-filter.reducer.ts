import { createReducer, on, props } from '@ngrx/store';
import { setFilter } from './todo-filter.actions';

export const initialState:string = 'All';

export const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, {filter}) => {
    if (filter === 'All' || filter === 'Completed' || filter === 'Pending' ) {
      return filter;
    } else {
      return state
    }
  })
);
