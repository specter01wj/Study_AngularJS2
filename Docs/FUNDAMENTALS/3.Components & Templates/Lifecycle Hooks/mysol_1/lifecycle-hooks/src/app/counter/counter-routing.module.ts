import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CounterComponent } from './counter.component';
import { CounterChildComponent } from './counter-child/counter-child.component';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      { path: 'counter-child', component: CounterChildComponent }
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
export class CounterRoutingModule { }
