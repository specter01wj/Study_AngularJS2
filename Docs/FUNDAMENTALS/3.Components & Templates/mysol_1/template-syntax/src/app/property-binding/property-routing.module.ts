import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PropertyBindingComponent } from './property-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { StringInitComponent } from './string-init/string-init.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyBindingComponent,
    children: [
      { path: 'item-detail', component: ItemDetailComponent },
      { path: 'item-list', component: ItemListComponent },
      { path: 'string-init', component: StringInitComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PropertyRoutingModule { }

export const routedComponents = [
  PropertyBindingComponent,
  ItemDetailComponent,
  ItemListComponent,
  StringInitComponent
];
