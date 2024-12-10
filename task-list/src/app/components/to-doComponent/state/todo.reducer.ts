import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';

import { Todo } from 'src/app/models/to-do/todo.model';

export const initialState: Todo[] = [
  new Todo('Aprender NgRx'),
  new Todo('Encontrar trabajo'),
  new Todo('Ser senior de Angular'),
  new Todo('Mejorar mi inglés a nativo'),
  new Todo('Trabajar en el extranjero'),
];

export const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, props) => [...state, new Todo(props.text)]),
  on(actions.editToggle, (state, props) => {
    return state.map((todo: Todo) => {
      if (props.id === todo.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editInputItem, (state, props) => {
    return state.map((todo: Todo) => {
      if (todo.id === props.id) {
        return { ...todo, text: props.text };
      } else {
        return todo;
      }
    });
  }),
  on(actions.deleteTask, (state, { id }) => {
    return state.filter((todo: Todo) => {
      return todo.id !== id;
    });
  }),
  on(actions.deleteAllTask, (state) => {
    return state.filter((todo: Todo) => {
      return !todo.completed;
    });
  }),
  on(actions.toggleAll, (state) => {
    return state.map((todo: Todo) => {
      return { ...todo, completed: !todo.completed };
    });
  })
);
