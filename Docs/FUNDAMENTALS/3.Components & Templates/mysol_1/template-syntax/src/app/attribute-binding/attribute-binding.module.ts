import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeRoutingModule } from './attribute-routing.module';

import { AttributeBindingComponent } from './attribute-binding.component';
import { CompWithHostBindingComponent } from './comp-with-host-binding/comp-with-host-binding.component';

@NgModule({
  declarations: [
  	AttributeBindingComponent,
  	CompWithHostBindingComponent
  ],
  imports: [
    CommonModule,
    AttributeRoutingModule
  ]
})
export class AttributeBindingModule { }
