import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OnChangesComponent } from './on-changes.component';
import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';

const routes: Routes = [
  {
    path: '',
    component: OnChangesComponent,
    children: [
      { path: 'on-changes-child', component: OnChangesChildComponent }
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
export class OnChangesRoutingModule { }
