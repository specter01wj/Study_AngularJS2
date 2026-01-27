import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { FlyingHeroesPipeImpure } from './flying-heroes-impure.pipe';
import { FetchJsonPipe } from './fetch-josn.pipe';

@NgModule({
  declarations: [
  	ExponentialStrengthPipe,
  	FlyingHeroesPipe,
    FlyingHeroesPipeImpure,
    FetchJsonPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesPipeImpure,
    FetchJsonPipe
  ]
})
export class PipesModuleModule { }
