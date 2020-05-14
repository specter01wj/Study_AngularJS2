import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesPipeImpure } from './flying-heroes-impure.pipe';

@NgModule({
  declarations: [
  	ExponentialStrengthPipe,
  	FlyingHeroesPipe,
    FlyingHeroesPipeImpure
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesPipeImpure
  ]
})
export class PipesModuleModule { }
