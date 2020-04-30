import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChildToParentRoutingModule } from './child-to-parent-routing.module';

import { ChildToParentComponent } from './child-to-parent.component';
import { ChildToParentChildComponent } from './child-to-parent-child/child-to-parent-child.component';

@NgModule({
  declarations: [
  	ChildToParentComponent, 
  	ChildToParentChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChildToParentRoutingModule
  ],
  exports: []
})
export class ChildToParentModule { }
