import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { InputsOutputsComponent } from './inputs-outputs.component';

import { AliasingComponent } from './aliasing/aliasing.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';

const routes: Routes = [
  {
    path: '',
    component: InputsOutputsComponent,
    children: [
      { path: 'aliasing', component: AliasingComponent },
      { path: 'in-the-metadata', component: InTheMetadataComponent },
      { path: 'input-output', component: InputOutputComponent },
      { path: 'item-detail', component: ItemDetailComponent },
      { path: 'item-output', component: ItemOutputComponent },
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
