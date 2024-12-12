import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/to-do/todo.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  currentFilter: string = 'All';
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.subscribe((todos: AppState) => {
        this.todos = todos.todos;
        this.currentFilter = todos.filters;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

//Para repasar la diferencia entre map de rxjs y map de Array

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
