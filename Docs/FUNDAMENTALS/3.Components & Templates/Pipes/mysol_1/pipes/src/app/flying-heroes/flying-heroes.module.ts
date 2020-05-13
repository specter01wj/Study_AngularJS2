import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlyingHeroesRoutingModule } from './flying-heroes-routing.module';

import { FlyingHeroesComponent } from './flying-heroes.component';

@NgModule({
  declarations: [
  	FlyingHeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlyingHeroesRoutingModule
  ],
  exports: []
})
export class FlyingHeroesModule { }
