import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/to-do/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    this.store.select('todos').subscribe((todos:Todo[])=> {
      return this.todos=todos; 
    })
  }
}
// this.store
//   .select('todos')
//   .pipe(
//     map((todos: Todo[]) => {
//       return todos.map((todo: Todo) => {
//         return todo.text;
//       });
//     })
//   )
//   .subscribe((todoText: string[]) => {
//     console.log(todoText);
//   });
