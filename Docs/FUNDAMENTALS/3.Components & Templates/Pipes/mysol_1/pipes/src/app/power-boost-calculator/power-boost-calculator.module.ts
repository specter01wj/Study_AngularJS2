import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PowerBoostCalculatorRoutingModule } from './power-boost-calculator-routing.module';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { ExponentialStrengthPipe } from '../common/exponential-strength.pipe';

@NgModule({
  declarations: [
  	PowerBoostCalculatorComponent,
  	ExponentialStrengthPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PowerBoostCalculatorRoutingModule
  ],
  exports: []
})
export class PowerBoostCalculatorModule { }
