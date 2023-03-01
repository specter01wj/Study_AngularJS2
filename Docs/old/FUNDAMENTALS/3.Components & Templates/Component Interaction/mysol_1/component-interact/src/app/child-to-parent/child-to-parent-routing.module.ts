import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChildToParentComponent } from './child-to-parent.component';
import { ChildToParentChildComponent } from './child-to-parent-child/child-to-parent-child.component';

const routes: Routes = [
  {
    path: '',
    component: ChildToParentComponent,
    children: [
      { path: 'child-to-parent-child', component: ChildToParentChildComponent }
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
export class ChildToParentRoutingModule { }
