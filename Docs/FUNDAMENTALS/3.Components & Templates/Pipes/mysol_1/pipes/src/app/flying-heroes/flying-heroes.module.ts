import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModuleModule } from '../common/pipes-module.module';

import { FlyingHeroesRoutingModule } from './flying-heroes-routing.module';

import { FlyingHeroesComponent } from './flying-heroes.component';

@NgModule({
  declarations: [
  	FlyingHeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlyingHeroesRoutingModule,
    PipesModuleModule
  ],
  exports: []
})
export class FlyingHeroesModule { }
