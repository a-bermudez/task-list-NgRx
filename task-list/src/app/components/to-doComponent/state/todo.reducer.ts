import { createReducer, on, props } from '@ngrx/store';
import { create, editToggle } from './todo.actions';
import { Todo } from 'src/app/models/to-do/todo.model';

export const initialState : Todo[] = [
    new Todo('Aprender NgRx'),
    new Todo('Encontrar trabajo'),
    new Todo('Ser senior de Angular'),
    new Todo('Mejorar mi inglés a nativo'),
    new Todo('Trabajar en el extranjero'),

];

export const _todoReducer = 
createReducer(
    initialState,
    on(create, (state,props) => [...state,new Todo(props.text)] ),
    on(editToggle,(state,props)=> {
       return state.map((todo:Todo)=> {
        if(props.id === todo.id) {
            return {...todo,completed:!todo.completed}
        }else {
            return todo;
        }
       })
    }),

    
);
