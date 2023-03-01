import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AfterContentRoutingModule } from './after-content-routing.module';

import { AfterContentComponent } from './after-content.component';
import { AfterContentChildComponent } from './after-content-child/after-content-child.component';
import { AfterContentGrandchildComponent } from './after-content-grandchild/after-content-grandchild.component';

@NgModule({
  declarations: [
  	AfterContentComponent, 
  	AfterContentChildComponent, 
  	AfterContentGrandchildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AfterContentRoutingModule
  ],
  exports: []
})
export class AfterContentModule { }
