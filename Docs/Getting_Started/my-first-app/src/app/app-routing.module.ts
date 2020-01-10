import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: ProductDashboardComponent },
      { path: 'product-list', component: ProductListComponent }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
