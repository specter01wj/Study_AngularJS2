import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';

import { EventBindingComponent } from './event-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [
  	EventBindingComponent,
  	ItemDetailComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventBindingModule { }
