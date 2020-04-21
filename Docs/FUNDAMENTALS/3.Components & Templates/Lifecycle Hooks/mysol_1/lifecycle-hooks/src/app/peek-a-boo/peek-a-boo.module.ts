import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeekABooRoutingModule } from './peek-a-boo-routing.module';

import { PeekABooComponent } from './peek-a-boo.component';


@NgModule({
  declarations: [
  	PeekABooComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeekABooRoutingModule
  ],
  exports: []
})
export class PeekABooModule { }
