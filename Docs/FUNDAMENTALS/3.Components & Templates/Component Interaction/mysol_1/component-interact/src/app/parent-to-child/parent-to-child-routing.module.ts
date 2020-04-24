import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ParentToChildComponent } from './parent-to-child.component';
import { ParentToChildChildComponent } from './parent-to-child-child/parent-to-child-child.component';

const routes: Routes = [
  {
    path: 'parent-to-child',
    component: ParentToChildComponent,
    children: [
      { path: 'parent-to-child-child', component: ParentToChildChildComponent }
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
export class ParentToChildRoutingModule { }
