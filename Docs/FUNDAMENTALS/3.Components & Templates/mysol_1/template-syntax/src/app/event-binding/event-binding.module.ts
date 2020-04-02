import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';

import { EventBindingComponent } from './event-binding.component';

@NgModule({
  declarations: [
  	EventBindingComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventBindingModule { }
