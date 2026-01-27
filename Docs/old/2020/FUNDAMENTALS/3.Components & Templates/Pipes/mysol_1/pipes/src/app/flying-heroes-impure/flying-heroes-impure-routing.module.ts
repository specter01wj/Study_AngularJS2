import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FlyingHeroesImpureComponent } from './flying-heroes-impure.component';

const routes: Routes = [
  {
    path: '',
    component: FlyingHeroesImpureComponent,
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
export class FlyingHeroesImpureRoutingModule { }
