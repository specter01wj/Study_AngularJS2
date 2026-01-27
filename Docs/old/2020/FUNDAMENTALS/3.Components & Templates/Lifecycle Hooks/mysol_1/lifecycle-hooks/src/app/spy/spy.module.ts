import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SpyRoutingModule } from './spy-routing.module';

import { SpyComponent } from './spy.component';
import { SpyDirective } from './spy.directive';

@NgModule({
  declarations: [
  	SpyComponent,
  	SpyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SpyRoutingModule
  ],
  exports: []
})
export class SpyModule { }
