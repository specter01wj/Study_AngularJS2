import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentToChildSetterComponent } from './parent-to-child-setter.component';
import { ParentToChildSetterChildComponent } from './parent-to-child-setter-child.component';



@NgModule({
  declarations: [ParentToChildSetterComponent, ParentToChildSetterChildComponent],
  imports: [
    CommonModule
  ]
})
export class ParentToChildSetterModule { }
