import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TwoWayRoutingModule } from './two-way-routing.module';

import { TwoWayBindingComponent } from './two-way-binding.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [TwoWayBindingComponent, SizerComponent],
  imports: [
    CommonModule,
    FormsModule,
    TwoWayRoutingModule
  ]
})
export class TwoWayBindingModule { }
