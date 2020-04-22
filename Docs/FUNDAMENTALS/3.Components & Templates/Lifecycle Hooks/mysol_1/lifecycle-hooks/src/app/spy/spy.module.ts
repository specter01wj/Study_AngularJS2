import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpyRoutingModule } from './spy-routing.module';

import { SpyComponent } from './spy.component';

@NgModule({
  declarations: [
  	SpyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpyModule { }
