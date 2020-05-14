import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListRoutingModule } from './hero-list-routing.module';

import { HeroListComponent } from './hero-list.component';

@NgModule({
  declarations: [
  	HeroListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroListRoutingModule
  ],
  exports: []
})
export class HeroListModule { }
