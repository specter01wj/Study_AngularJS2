import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoCheckComponent } from './do-check.component';
import { DoCheckChildComponent } from './do-check-child/do-check-child.component';



@NgModule({
  declarations: [DoCheckComponent, DoCheckChildComponent],
  imports: [
    CommonModule
  ]
})
export class DoCheckModule { }
