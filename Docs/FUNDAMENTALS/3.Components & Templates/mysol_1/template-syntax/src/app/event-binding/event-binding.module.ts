import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';

import { EventBindingComponent } from './event-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ClickDirective } from './click.directive';

@NgModule({
  declarations: [
  	EventBindingComponent,
  	ItemDetailComponent,
  	ClickDirective
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventBindingModule { }
