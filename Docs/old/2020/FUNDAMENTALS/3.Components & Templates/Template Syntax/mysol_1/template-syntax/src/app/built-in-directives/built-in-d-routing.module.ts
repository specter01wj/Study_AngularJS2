import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BuiltInDirectivesComponent } from './built-in-directives.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BuiltInDirectivesComponent,
    children: [
      { path: 'item-detail', component: ItemDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BuiltInDRoutingModule { }
