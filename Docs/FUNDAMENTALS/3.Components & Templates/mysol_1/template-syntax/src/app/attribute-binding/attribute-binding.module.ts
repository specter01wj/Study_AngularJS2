import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeBindingComponent } from './attribute-binding.component';

import { AttributeRoutingModule } from './attribute-routing.module';

@NgModule({
  declarations: [
  	AttributeBindingComponent
  ],
  imports: [
    CommonModule,
    AttributeRoutingModule
  ]
})
export class AttributeBindingModule { }
