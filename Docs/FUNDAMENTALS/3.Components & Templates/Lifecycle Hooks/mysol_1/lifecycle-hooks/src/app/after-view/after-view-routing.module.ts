import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AfterViewComponent } from './after-view.component';
import { AfterViewChildComponent } from './after-view-child/after-view-child.component';
import { AfterViewGrandchildComponent } from './after-view-grandchild/after-view-grandchild.component';

const routes: Routes = [
  {
    path: '',
    component: AfterViewComponent,
    children: [
      { path: 'after-view-child', component: AfterViewChildComponent },
      { path: 'after-view-grandchild', component: AfterViewGrandchildComponent }
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
export class AfterViewRoutingModule { }
