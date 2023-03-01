import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnChangesRoutingModule } from './on-changes-routing.module';

import { OnChangesComponent } from './on-changes.component';
import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';

@NgModule({
  declarations: [
  	OnChangesComponent, 
  	OnChangesChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OnChangesRoutingModule
  ],
  exports: []
})
export class OnChangesModule { }
