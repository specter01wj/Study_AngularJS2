import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BindingSyntaxComponent } from './binding-syntax.component';

const routes: Routes = [
  {
    path: '',
    component: BindingSyntaxComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [
  	BindingSyntaxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BindingRoutingModule { }
