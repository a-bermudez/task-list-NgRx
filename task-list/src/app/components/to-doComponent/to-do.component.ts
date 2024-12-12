import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from './state/todo.actions';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  completed: boolean = false;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}
  toggleAll(): void {
    this.store.dispatch(toggleAll());
  }
}
