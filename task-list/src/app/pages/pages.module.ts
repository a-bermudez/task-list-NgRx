import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoPageModule } from './to-do-page/to-do-page.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [],
  imports: [CommonModule, ToDoPageModule],
  exports: [ToDoPageModule],
})
export class PagesModule {}
