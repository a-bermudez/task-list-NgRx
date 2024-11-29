import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-doComponent/to-do.component';
import { ComponentsModule } from './components/components.module';
import { FooterComponent } from './shared/footer/footer.component';
import { ToDoPageComponent } from './pages/to-do-page/to-do-page.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, ToDoPageComponent],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
