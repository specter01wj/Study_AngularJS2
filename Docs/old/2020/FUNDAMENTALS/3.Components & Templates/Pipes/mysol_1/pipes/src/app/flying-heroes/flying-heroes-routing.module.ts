import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FlyingHeroesComponent } from './flying-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: FlyingHeroesComponent,
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
export class FlyingHeroesRoutingModule { }
