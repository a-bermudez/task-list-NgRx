import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/models/to-do/todo.model';
import { editToggle } from '../state/todo.actions';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('editInput') txtInputElement!: ElementRef;
  chkCompleted!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(() => {
      this.store.dispatch(editToggle({id:this.todo.id}))
    });
  }
  edit() {

    this.editing = true;
    setTimeout(() => {
      this.txtInputElement.nativeElement.select();
    }, 0);
  }

  finishEdition() {
    this.editing = false;
  }
}
