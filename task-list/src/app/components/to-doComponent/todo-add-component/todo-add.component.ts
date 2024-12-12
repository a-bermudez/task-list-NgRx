import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { create } from '../state/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  addToDo(): void {
    if (this.txtInput.valid) {
      this.store.dispatch(create({ text: this.txtInput.value }));
      this.txtInput.reset();
    }
  }
}
