import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentToChildSetterRoutingModule } from './parent-to-child-setter-routing.module';

import { ParentToChildSetterComponent } from './parent-to-child-setter.component';
import { ParentToChildSetterChildComponent } from './parent-to-child-setter-child/parent-to-child-setter-child.component';

@NgModule({
  declarations: [
  	ParentToChildSetterComponent, 
  	ParentToChildSetterChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParentToChildSetterRoutingModule
  ],
  exports: []
})
export class ParentToChildSetterModule { }
