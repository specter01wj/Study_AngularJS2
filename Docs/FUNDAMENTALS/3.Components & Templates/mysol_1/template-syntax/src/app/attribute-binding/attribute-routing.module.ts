import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AttributeBindingComponent } from './attribute-binding.component';

const routes: Routes = [
  {
    path: '',
    component: AttributeBindingComponent,
    children: [
      
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AttributeRoutingModule { }
