import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding.component';
import { SizerComponent } from './sizer/sizer.component';

const routes: Routes = [
  {
    path: '',
    component: TwoWayBindingComponent,
    children: [
      { path: 'size', component: SizerComponent }
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
export class TwoWayRoutingModule { }
