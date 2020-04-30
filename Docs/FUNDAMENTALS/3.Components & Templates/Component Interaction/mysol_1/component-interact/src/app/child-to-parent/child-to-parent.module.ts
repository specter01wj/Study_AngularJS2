import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildToParentComponent } from './child-to-parent.component';
import { ChildToParentChildComponent } from './child-to-parent-child/child-to-parent-child.component';



@NgModule({
  declarations: [ChildToParentComponent, ChildToParentChildComponent],
  imports: [
    CommonModule
  ]
})
export class ChildToParentModule { }
