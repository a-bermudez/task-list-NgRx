import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/to-do/todo.model';
import * as actions from '../state/todo.actions';
import { Subscription } from 'rxjs';
import { deleteTask } from '../state/todo.actions';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit, OnDestroy {
  @Input() todo!: Todo;
  @ViewChild('editInput') txtInputElement!: ElementRef;
  chkCompleted!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.subscription.add(
      this.chkCompleted.valueChanges.subscribe(() => {
        this.store.dispatch(actions.editToggle({ id: this.todo.id }));
      })
    );
  }
  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputElement.nativeElement.select();
    }, 0);
  }

  finishEdition() {
    this.editing = false;
    if (this.todo.text === this.txtInput.value) {
      return;
    }
    this.store.dispatch(
      actions.editInputItem({ id: this.todo.id, text: this.txtInput.value })
    );
  }
  deleteTask() {
    this.store.dispatch(actions.deleteTask({ id: this.todo.id }));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
