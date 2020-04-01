import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';

import { BindingSyntaxComponent } from './binding-syntax.component';

@NgModule({
  declarations: [
  	BindingSyntaxComponent
  ],
  imports: [
    CommonModule,
    BindingRoutingModule
  ]
})
export class BindingSyntaxModule { }
