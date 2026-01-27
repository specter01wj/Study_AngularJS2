import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DoCheckRoutingModule } from './do-check-routing.module';

import { DoCheckComponent } from './do-check.component';
import { DoCheckChildComponent } from './do-check-child/do-check-child.component';

@NgModule({
  declarations: [
  	DoCheckComponent, 
  	DoCheckChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoCheckRoutingModule
  ],
  exports: []
})
export class DoCheckModule { }
