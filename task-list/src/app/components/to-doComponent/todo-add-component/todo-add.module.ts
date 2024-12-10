import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoAddComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoAddComponent],
})
export class TodoAddModule {}
