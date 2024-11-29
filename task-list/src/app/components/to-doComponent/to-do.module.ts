import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { TodoAddComponentModule } from './todo-add-component/todo-add.module';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';



@NgModule({
  declarations: [ToDoComponent, ToDoItemComponent, ToDoListComponent],
  imports: [CommonModule, TodoAddComponentModule],
  exports: [ToDoComponent],
})
export class ToDoModule {}
