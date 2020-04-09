import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ClickMe2Component } from './click-me2/click-me2.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMe2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
