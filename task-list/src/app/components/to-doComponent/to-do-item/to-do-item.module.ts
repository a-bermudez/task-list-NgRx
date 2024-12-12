import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from './to-do-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoItemComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ToDoItemComponent],
})
export class ToDoItemModule {}
