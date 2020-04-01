import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BindingSyntaxComponent } from './binding-syntax.component';

const routes: Routes = [
  {
    path: '',
    component: BindingSyntaxComponent,
    children: []
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BindingRoutingModule { }
