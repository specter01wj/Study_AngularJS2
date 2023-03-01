import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: PowerBoostCalculatorComponent,
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
export class PowerBoostCalculatorRoutingModule { }
