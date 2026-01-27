import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ParentToViewChildComponent } from './parent-to-view-child.component';
import { ParentToViewChildTimerComponent } from './parent-to-view-child-timer/parent-to-view-child-timer.component';

const routes: Routes = [
  {
    path: '',
    component: ParentToViewChildComponent,
    children: [
      { path: 'parent-to-view-child-timer', component: ParentToViewChildTimerComponent }
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
export class ParentToViewChildRoutingModule { }
