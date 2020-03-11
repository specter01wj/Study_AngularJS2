import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: ProductDashboardComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-list/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent }
    ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
