import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DevfestCommonModule } from '@devfestmd/common';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DevfestCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
