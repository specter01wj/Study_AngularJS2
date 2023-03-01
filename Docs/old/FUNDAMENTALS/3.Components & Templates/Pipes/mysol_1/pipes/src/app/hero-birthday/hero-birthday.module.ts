import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroBirthdayRoutingModule } from './hero-birthday-routing.module';

import { HeroBirthdayComponent } from './hero-birthday.component';

@NgModule({
  declarations: [
  	HeroBirthdayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroBirthdayRoutingModule
  ],
  exports: []
})
export class HeroBirthdayModule { }
