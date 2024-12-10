import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from '../state/todo-filter.actions';
import { Subscription, take } from 'rxjs';
import { Todo } from 'src/app/models/to-do/todo.model';
import { deleteAllTask, deleteTask } from '../state/todo.actions';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.component.html',
  styleUrls: ['./to-do-filter.component.scss'],
})
export class ToDoFilterComponent implements OnInit {
  currentFilter: string = 'All';
  pendingTask: number = 0;
  filters: string[] = ['All', 'Completed', 'Pending'];
  subscriptions: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.subscriptions.add(
      this.store.subscribe((to_do: AppState) => {
        this.currentFilter = to_do.filters;
        this.pendingTask = to_do.todos.filter((todo: Todo) => {
          return !todo.completed;
        }).length;
      })
    );
  }
  changeFilter(filter: string) {
    if (this.currentFilter === filter) {
      return;
    }
    this.store.dispatch(setFilter({ filter }));
  }
  deleteCompletedTask() {
    this.store.dispatch(deleteAllTask());

    //Guardo el código debido a que creo que he encontrado una alternativa mejor,
    //pero como es válido prefiero no perderlo

    // this.store.select('todos').pipe(take(1)).subscribe((todos: Todo[]) => {
    //   todos.filter((todo: Todo) => {
    //       return todo.completed;
    //     }).map((completedTodo: Todo) => {
    //       return this.store.dispatch(deleteTask({ id: completedTodo.id }));
    //     });
    // });
  }
}
