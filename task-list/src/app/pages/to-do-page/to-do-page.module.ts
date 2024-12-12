import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoPageComponent } from './to-do-page.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ToDoPageComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ToDoPageComponent],
})
export class ToDoPageModule {}
