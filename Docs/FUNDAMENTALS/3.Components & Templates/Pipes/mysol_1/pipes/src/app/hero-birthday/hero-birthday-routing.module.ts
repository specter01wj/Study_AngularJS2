import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeroBirthdayComponent } from './hero-birthday.component';

const routes: Routes = [
  {
    path: 'happy-birthday1',
    component: HeroBirthdayComponent,
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
export class HeroBirthdayRoutingModule { }
