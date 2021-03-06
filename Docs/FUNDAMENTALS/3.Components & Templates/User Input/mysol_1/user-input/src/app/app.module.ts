import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { ClickMe2Component } from './click-me2/click-me2.component';

import { KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4 } from './keyup/keyup.component';

import { LittleTourComponent } from './little-tour/little-tour.component';
import { LoopBackComponent } from './loop-back/loop-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMe2Component,

    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    
    LittleTourComponent,
    LoopBackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
