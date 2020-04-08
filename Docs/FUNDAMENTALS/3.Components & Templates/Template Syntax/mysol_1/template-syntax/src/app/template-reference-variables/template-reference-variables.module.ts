import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRefVarRoutingModule } from './template-ref-var-routing.module';

import { TemplateReferenceVariablesComponent } from './template-reference-variables.component';

@NgModule({
  declarations: [
  	TemplateReferenceVariablesComponent
 	],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRefVarRoutingModule
  ]
})
export class TemplateReferenceVariablesModule { }
