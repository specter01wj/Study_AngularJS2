import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
