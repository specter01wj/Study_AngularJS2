import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputsOutputsRoutingModule } from './inputs-outputs-routing.module';

import { InputsOutputsComponent } from './inputs-outputs.component';
import { AliasingComponent } from './aliasing/aliasing.component';



@NgModule({
  declarations: [InputsOutputsComponent, AliasingComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputsOutputsRoutingModule
  ]
})
export class InputsOutputsModule { }
