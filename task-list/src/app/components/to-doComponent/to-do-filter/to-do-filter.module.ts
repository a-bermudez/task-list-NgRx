import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoFilterComponent } from './to-do-filter.component';



@NgModule({
  declarations: [ToDoFilterComponent],
  imports: [CommonModule],
  exports: [ToDoFilterComponent],
})
export class ToDoFilterModule {}
