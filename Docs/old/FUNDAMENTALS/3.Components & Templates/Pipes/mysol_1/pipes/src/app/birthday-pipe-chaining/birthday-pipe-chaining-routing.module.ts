import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BirthdayPipeChainingComponent } from './birthday-pipe-chaining.component';

const routes: Routes = [
  {
    path: '',
    component: BirthdayPipeChainingComponent,
    children: [
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
export class BirthdayPipeChainingRoutingModule { }
