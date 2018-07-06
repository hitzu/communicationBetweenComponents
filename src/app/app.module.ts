import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Children1Component } from './components/children1/children1.component';
import { Children2Component } from './components/children2/children2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Children1Component,
    Children2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
