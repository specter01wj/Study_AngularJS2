import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DoCheckComponent } from './do-check.component';
import { DoCheckChildComponent } from './do-check-child/do-check-child.component';

const routes: Routes = [
  {
    path: '',
    component: DoCheckComponent,
    children: [
      { path: 'do-check-child', component: DoCheckChildComponent }
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
export class DoCheckRoutingModule { }
