import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BirthdayDatePipeComponent } from './birthday-date-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: BirthdayDatePipeComponent,
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
export class BirthdayDatePipeRoutingModule { }
