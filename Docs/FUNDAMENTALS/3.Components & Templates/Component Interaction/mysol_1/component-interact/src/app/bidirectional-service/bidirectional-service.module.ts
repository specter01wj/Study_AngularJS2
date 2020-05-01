import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BidirectionalServiceComponent } from './bidirectional-service.component';
import { AstronautComponent } from './astronaut/astronaut.component';



@NgModule({
  declarations: [BidirectionalServiceComponent, AstronautComponent],
  imports: [
    CommonModule
  ]
})
export class BidirectionalServiceModule { }
