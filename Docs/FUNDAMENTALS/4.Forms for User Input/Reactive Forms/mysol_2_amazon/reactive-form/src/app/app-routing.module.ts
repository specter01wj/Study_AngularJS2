import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonComponent } from './amazon/amazon.component';

const routes: Routes = [
	{ path: 'amazon', component: AmazonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
