import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentToChildOnChangesRoutingModule } from './parent-to-child-on-changes-routing.module';


import { ParentToChildOnChangesComponent } from './parent-to-child-on-changes.component';
import { ParentToChildOnChangesChildComponent } from './parent-to-child-on-changes-child/parent-to-child-on-changes-child.component';



@NgModule({
  declarations: [ParentToChildOnChangesComponent, ParentToChildOnChangesChildComponent],
  imports: [
    CommonModule
  ]
})
export class ParentToChildOnChangesModule { }
