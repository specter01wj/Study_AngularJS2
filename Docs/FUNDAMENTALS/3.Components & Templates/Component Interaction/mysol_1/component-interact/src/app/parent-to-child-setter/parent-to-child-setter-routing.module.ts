import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ParentToChildSetterComponent } from './parent-to-child-setter.component';
import { ParentToChildSetterChildComponent } from './parent-to-child-setter-child/parent-to-child-setter-child.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ParentToChildSetterRoutingModule { }
