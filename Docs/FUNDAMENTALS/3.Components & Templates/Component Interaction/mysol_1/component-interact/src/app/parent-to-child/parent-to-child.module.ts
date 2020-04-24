import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentToChildRoutingModule } from './parent-to-child-routing.module';

import { ParentToChildComponent } from './parent-to-child.component';
import { ParentToChildChildComponent } from './parent-to-child-child.component';


@NgModule({
  declarations: [
  	ParentToChildComponent,
  	ParentToChildChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParentToChildRoutingModule
  ],
  exports: []
})
export class ParentToChildModule { }
