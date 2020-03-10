import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: ProductDashboardComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-list/:productId', component: ProductDetailsComponent }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
