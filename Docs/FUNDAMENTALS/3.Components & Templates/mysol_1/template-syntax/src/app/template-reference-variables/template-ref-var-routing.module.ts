import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TemplateReferenceVariablesComponent } from './template-reference-variables.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateReferenceVariablesComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TemplateRefVarRoutingModule { }
