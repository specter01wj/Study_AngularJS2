import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BirthdayDatePipeRoutingModule } from './birthday-date-pipe-routing.module';

import { BirthdayDatePipeComponent } from './birthday-date-pipe.component';

@NgModule({
  declarations: [
  	BirthdayDatePipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BirthdayDatePipeRoutingModule
  ],
  exports: []
})
export class BirthdayDatePipeModule { }
