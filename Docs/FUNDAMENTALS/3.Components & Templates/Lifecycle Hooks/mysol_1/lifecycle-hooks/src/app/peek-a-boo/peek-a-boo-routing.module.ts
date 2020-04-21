import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PeekABooComponent } from './peek-a-boo.component';
import { PeekABooChildComponent } from './peek-a-boo-child/peek-a-boo-child.component';

const routes: Routes = [
  {
    path: 'peek-a-boo',
    component: PeekABooComponent,
    children: [
      { path: 'peek-a-boo-child', component: PeekABooChildComponent }
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
export class PeekABooRoutingModule { }
