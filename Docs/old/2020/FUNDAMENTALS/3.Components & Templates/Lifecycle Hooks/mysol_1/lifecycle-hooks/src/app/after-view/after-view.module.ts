import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AfterViewRoutingModule } from './after-view-routing.module';

import { AfterViewComponent } from './after-view.component';
import { AfterViewChildComponent } from './after-view-child/after-view-child.component';
import { AfterViewGrandchildComponent } from './after-view-grandchild/after-view-grandchild.component';

@NgModule({
  declarations: [
  	AfterViewComponent, 
  	AfterViewChildComponent, 
  	AfterViewGrandchildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AfterViewRoutingModule
  ],
  exports: []
})
export class AfterViewModule { }
