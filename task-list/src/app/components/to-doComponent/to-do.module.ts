import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { TodoAddModule } from './todo-add-component/todo-add.module';
import { ToDoItemModule } from './to-do-item/to-do-item.module';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ToDoComponent],
  imports: [CommonModule, TodoAddModule, ToDoListModule],
  exports: [ToDoComponent],
})
export class ToDoModule {}
