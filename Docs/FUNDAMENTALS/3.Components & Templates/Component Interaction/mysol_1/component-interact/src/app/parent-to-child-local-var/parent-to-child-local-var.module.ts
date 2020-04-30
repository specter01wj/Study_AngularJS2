import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentToChildLocalVarComponent } from './parent-to-child-local-var.component';
import { ParentToChildLocalVarChildComponent } from './parent-to-child-local-var-child/parent-to-child-local-var-child.component';



@NgModule({
  declarations: [ParentToChildLocalVarComponent, ParentToChildLocalVarChildComponent],
  imports: [
    CommonModule
  ]
})
export class ParentToChildLocalVarModule { }
