import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PipesModuleModule } from '../common/pipes-module.module';
import { HeroListRoutingModule } from './hero-list-routing.module';

import { HeroListComponent } from './hero-list.component';

@NgModule({
  declarations: [
  	HeroListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroListRoutingModule,
    PipesModuleModule
  ],
  exports: []
})
export class HeroListModule { }
