import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { StoreModule } from '@ngrx/store';
import { _todoReducer } from './components/to-doComponent/state/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
    PagesModule,
    StoreModule.forRoot({ todos: _todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true, // If set to true, the connection is established outside the Angular zone for better performance
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
