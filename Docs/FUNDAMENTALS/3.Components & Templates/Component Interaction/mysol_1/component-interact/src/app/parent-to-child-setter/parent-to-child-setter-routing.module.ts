import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ParentToChildSetterComponent } from './parent-to-child-setter.component';
import { ParentToChildSetterChildComponent } from './parent-to-child-setter-child/parent-to-child-setter-child.component';

const routes: Routes = [
  {
    path: '',
    component: ParentToChildSetterComponent,







    
    children: [
      { path: 'parent-to-child-setter-child', component: ParentToChildSetterChildComponent }
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
export class ParentToChildSetterRoutingModule { }
