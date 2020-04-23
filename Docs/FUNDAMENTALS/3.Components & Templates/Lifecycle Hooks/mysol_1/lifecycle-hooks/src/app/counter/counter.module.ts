import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { CounterChildComponent } from './counter-child/counter-child.component';



@NgModule({
  declarations: [CounterComponent, CounterChildComponent],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
