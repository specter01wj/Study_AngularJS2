import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ParentToChildOnChangesComponent } from './parent-to-child-on-changes.component';
import { ParentToChildOnChangesChildComponent } from './parent-to-child-on-changes-child/parent-to-child-on-changes-child.component';

const routes: Routes = [
  {
    path: '',
    component: ParentToChildOnChangesComponent,
    children: [
      { path: 'parent-to-child-on-changes-child', component: ParentToChildOnChangesComponent }
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
export class ParentToChildOnChangesRoutingModule { }
