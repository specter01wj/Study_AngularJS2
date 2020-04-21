import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PeekABooComponent } from './peek-a-boo.component';

const routes: Routes = [
  {
    path: 'peek-a-boo',
    component: PeekABooComponent,
    children: [
      /*{ path: 'hero-detail', component: HeroDetailComponent },
      { path: 'big-hero-detail', component: BigHeroDetailComponent },
      { path: 'sizer', component: SizerComponent }*/
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
