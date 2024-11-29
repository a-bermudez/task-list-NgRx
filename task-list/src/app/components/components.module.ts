import { NgModule } from '@angular/core';
import { ToDoModule } from './to-doComponent/to-do.module';



@NgModule({
  declarations: [
  ],
  imports: [ToDoModule],
  exports: [ToDoModule],
})
export class ComponentsModule {}
