import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModuleModule } from '../common/pipes-module.module';

import { PowerBoostCalculatorRoutingModule } from './power-boost-calculator-routing.module';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';

@NgModule({
  declarations: [
  	PowerBoostCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PowerBoostCalculatorRoutingModule,
    PipesModuleModule
  ],
  exports: []
})
export class PowerBoostCalculatorModule { }
