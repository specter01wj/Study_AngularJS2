import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesModuleModule } from '../common/pipes-module.module';
import { FlyingHeroesModule } from '../flying-heroes/flying-heroes.module';
import { FlyingHeroesImpureRoutingModule } from './flying-heroes-impure-routing.module';

import { FlyingHeroesImpureComponent } from './flying-heroes-impure.component';

@NgModule({
  declarations: [
  	FlyingHeroesImpureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlyingHeroesImpureRoutingModule,
    FlyingHeroesModule,
    PipesModuleModule
  ],
  exports: []
})
export class FlyingHeroesImpureModule { }
