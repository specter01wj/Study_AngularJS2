import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventBindingComponent } from './event-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EventBindingComponent,
    children: [
    	{ path: 'item-detail', component: ItemDetailComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EventRoutingModule { }
