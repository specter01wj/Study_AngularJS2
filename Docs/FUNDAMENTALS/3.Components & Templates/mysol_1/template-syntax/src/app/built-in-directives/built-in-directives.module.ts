import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuiltInDirectivesComponent } from './built-in-directives.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';



@NgModule({
  declarations: [BuiltInDirectivesComponent, ItemDetailComponent],
  imports: [
    CommonModule
  ]
})
export class BuiltInDirectivesModule { }
