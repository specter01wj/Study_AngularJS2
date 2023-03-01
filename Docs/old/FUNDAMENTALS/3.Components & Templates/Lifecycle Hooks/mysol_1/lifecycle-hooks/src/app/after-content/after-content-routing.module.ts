import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AfterContentComponent } from './after-content.component';
import { AfterContentChildComponent } from './after-content-child/after-content-child.component';
import { AfterContentGrandchildComponent } from './after-content-grandchild/after-content-grandchild.component';

const routes: Routes = [
  {
    path: '',
    component: AfterContentComponent,
    children: [
      { path: 'after-content-child', component: AfterContentChildComponent },
      { path: 'after-content-grandchild', component: AfterContentGrandchildComponent }
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
export class AfterContentRoutingModule { }
