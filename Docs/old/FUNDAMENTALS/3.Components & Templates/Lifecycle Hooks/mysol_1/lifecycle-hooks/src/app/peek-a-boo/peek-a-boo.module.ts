import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeekABooRoutingModule } from './peek-a-boo-routing.module';

import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABooChildComponent } from './peek-a-boo-child/peek-a-boo-child.component';


@NgModule({
  declarations: [
  	PeekABooComponent,
  	PeekABooChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeekABooRoutingModule
  ],
  exports: []
})
export class PeekABooModule { }
