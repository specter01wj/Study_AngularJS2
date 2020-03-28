import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { StringInitComponent } from './string-init/string-init.component';
import { PropertyBindingComponent } from './property-binding.component';

import { PropertyRoutingModule } from './property-routing.module';

@NgModule({
  declarations: [
  	ItemDetailComponent, 
  	ItemListComponent, 
  	StringInitComponent, 
  	PropertyBindingComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyBindingModule { }
