import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { HeroBirthdayModule } from './hero-birthday/hero-birthday.module';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './common/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HeroBirthdayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
