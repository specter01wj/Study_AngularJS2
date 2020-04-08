import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputsOutputsRoutingModule } from './inputs-outputs-routing.module';

import { InputsOutputsComponent } from './inputs-outputs.component';
import { AliasingComponent } from './aliasing/aliasing.component';
import { InTheMetadataComponent } from './in-the-metadata/in-the-metadata.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';



@NgModule({
  declarations: [InputsOutputsComponent, AliasingComponent, InTheMetadataComponent, InputOutputComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputsOutputsRoutingModule
  ]
})
export class InputsOutputsModule { }
