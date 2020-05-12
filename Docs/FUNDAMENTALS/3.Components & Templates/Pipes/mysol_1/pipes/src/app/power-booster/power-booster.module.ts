import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PowerBoosterRoutingModule } from './power-booster-routing.module';

import { PowerBoosterComponent } from './power-booster.component';

@NgModule({
  declarations: [
  	PowerBoosterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PowerBoosterRoutingModule
  ],
  exports: []
})
export class PowerBoosterModule { }
