import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { SizerComponent } from './sizer/sizer.component';



@NgModule({
  declarations: [TwoWayBindingComponent, SizerComponent],
  imports: [
    CommonModule
  ]
})
export class TwoWayBindingModule { }
