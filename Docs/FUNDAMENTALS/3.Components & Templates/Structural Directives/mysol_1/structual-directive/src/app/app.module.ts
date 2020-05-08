import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnlessDirective } from './directives/unless.directive';
import { HeroSwitchComponent } from './hero-switch/hero-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    HeroSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
