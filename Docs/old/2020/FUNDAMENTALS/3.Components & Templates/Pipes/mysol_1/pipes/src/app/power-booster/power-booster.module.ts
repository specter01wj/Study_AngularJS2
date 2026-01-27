import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModuleModule } from '../common/pipes-module.module';

import { PowerBoosterRoutingModule } from './power-booster-routing.module';

import { PowerBoosterComponent } from './power-booster.component';
// import { ExponentialStrengthPipe } from '../common/exponential-strength.pipe';

@NgModule({
  declarations: [
  	PowerBoosterComponent,
  	// ExponentialStrengthPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PowerBoosterRoutingModule,
    PipesModuleModule
  ],
  exports: []
})
export class PowerBoosterModule { }
