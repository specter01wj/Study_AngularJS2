import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BirthdayPipeChainingRoutingModule } from './birthday-pipe-chaining-routing.module';

import { BirthdayPipeChainingComponent } from './birthday-pipe-chaining.component';

@NgModule({
  declarations: [
  	BirthdayPipeChainingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BirthdayPipeChainingRoutingModule
  ],
  exports: []
})
export class BirthdayPipeChainingModule { }
