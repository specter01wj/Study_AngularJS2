import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { InputsOutputsComponent } from './inputs-outputs.component';


const routes: Routes = [
  {
    path: '',
    component: InputsOutputsComponent,
    children: [
      { path: 'sizer', component: SizerComponent }
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
export class InputsOutputsRoutingModule { }
