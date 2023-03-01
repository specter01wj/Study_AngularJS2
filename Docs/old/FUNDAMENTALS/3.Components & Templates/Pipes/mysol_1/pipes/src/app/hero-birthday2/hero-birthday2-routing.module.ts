import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroBirthday2Component } from './hero-birthday2.component';

const routes: Routes = [
  {
    path: '',
    component: HeroBirthday2Component,
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
export class HeroBirthday2RoutingModule { }
