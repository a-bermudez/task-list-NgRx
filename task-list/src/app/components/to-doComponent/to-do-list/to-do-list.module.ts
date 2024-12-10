import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoItemModule } from '../to-do-item/to-do-item.module';
import { FilterModule } from 'src/app/pipes/todo/filter.module';

@NgModule({
  declarations: [ToDoListComponent],
  imports: [CommonModule, ToDoItemModule, FilterModule],
  exports: [ToDoListComponent],
})
export class ToDoListModule {}
