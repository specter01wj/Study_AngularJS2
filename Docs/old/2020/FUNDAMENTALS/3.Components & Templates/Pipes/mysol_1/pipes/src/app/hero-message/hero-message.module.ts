import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroMessageRoutingModule } from './hero-message-routing.module';

import { HeroMessageComponent } from './hero-message.component';

@NgModule({
  declarations: [
  	HeroMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroMessageRoutingModule
  ],
  exports: []
})
export class HeroMessageModule { }
