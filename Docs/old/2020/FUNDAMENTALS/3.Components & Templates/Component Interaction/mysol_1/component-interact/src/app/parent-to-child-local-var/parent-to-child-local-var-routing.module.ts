import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ParentToChildLocalVarComponent } from './parent-to-child-local-var.component';
import { ParentToChildLocalVarChildComponent } from './parent-to-child-local-var-child/parent-to-child-local-var-child.component';

const routes: Routes = [
  {
    path: '',
    component: ParentToChildLocalVarComponent,
    children: [
      { path: 'parent-to-child-local-var-child', component: ParentToChildLocalVarChildComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ParentToChildLocalVarRoutingModule { }
