import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroBirthday2RoutingModule } from './hero-birthday2-routing.module';

import { HeroBirthday2Component } from './hero-birthday2.component';

@NgModule({
  declarations: [
  	HeroBirthday2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroBirthday2RoutingModule
  ],
  exports: []
})
export class HeroBirthday2Module { }
