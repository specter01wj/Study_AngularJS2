import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlyingHeroesImpureRoutingModule } from './flying-heroes-impure-routing.module';

import { FlyingHeroesImpureComponent } from './flying-heroes-impure.component';



@NgModule({
  declarations: [FlyingHeroesImpureComponent],
  imports: [
    CommonModule
  ]
})
export class FlyingHeroesImpureModule { }
