import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BidirectionalServiceComponent } from './bidirectional-service.component';
import { AstronautComponent } from './astronaut/astronaut.component';

const routes: Routes = [
  {
    path: '',
    component: BidirectionalServiceComponent,
    children: [
      { path: 'astronaut', component: AstronautComponent }
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
export class BidirectionalServiceRoutingModule { }
