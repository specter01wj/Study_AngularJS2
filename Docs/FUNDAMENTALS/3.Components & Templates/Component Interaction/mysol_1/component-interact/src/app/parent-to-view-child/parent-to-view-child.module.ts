import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentToViewChildComponent } from './parent-to-view-child.component';
import { ParentToViewChildTimerComponent } from './parent-to-view-child-timer/parent-to-view-child-timer.component';



@NgModule({
  declarations: [ParentToViewChildComponent, ParentToViewChildTimerComponent],
  imports: [
    CommonModule
  ]
})
export class ParentToViewChildModule { }
