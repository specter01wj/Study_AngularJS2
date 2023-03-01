import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentToChildLocalVarRoutingModule } from './parent-to-child-local-var-routing.module';

import { ParentToChildLocalVarComponent } from './parent-to-child-local-var.component';
import { ParentToChildLocalVarChildComponent } from './parent-to-child-local-var-child/parent-to-child-local-var-child.component';

@NgModule({
  declarations: [
  	ParentToChildLocalVarComponent, 
  	ParentToChildLocalVarChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParentToChildLocalVarRoutingModule
  ],
  exports: []
})
export class ParentToChildLocalVarModule { }
