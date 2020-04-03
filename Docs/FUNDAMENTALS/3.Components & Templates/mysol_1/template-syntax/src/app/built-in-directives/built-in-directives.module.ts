import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BuiltInDRoutingModule } from './built-in-d-routing.module';

import { BuiltInDirectivesComponent } from './built-in-directives.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [BuiltInDirectivesComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    BuiltInDRoutingModule
  ]
})
export class BuiltInDirectivesModule { }
