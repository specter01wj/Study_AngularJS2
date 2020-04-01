import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AttributeBindingComponent } from './attribute-binding.component';
import { CompWithHostBindingComponent } from './comp-with-host-binding/comp-with-host-binding.component';

const routes: Routes = [
  {
    path: '',
    component: AttributeBindingComponent,
    children: [
      { path: 'comp-with-host-binding', component: CompWithHostBindingComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AttributeRoutingModule { }
