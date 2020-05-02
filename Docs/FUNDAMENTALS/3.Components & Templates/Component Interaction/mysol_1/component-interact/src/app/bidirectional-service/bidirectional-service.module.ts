import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BidirectionalServiceRoutingModule } from './bidirectional-service-routing.module';

import { BidirectionalServiceComponent } from './bidirectional-service.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  declarations: [
  	BidirectionalServiceComponent, 
  	AstronautComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BidirectionalServiceRoutingModule
  ],
  exports: []
})
export class BidirectionalServiceModule { }
