import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnChangesComponent } from './on-changes.component';
import { OnChangesChildComponent } from './on-changes/on-changes-child.component';



@NgModule({
  declarations: [OnChangesComponent, OnChangesChildComponent],
  imports: [
    CommonModule
  ]
})
export class OnChangesModule { }
