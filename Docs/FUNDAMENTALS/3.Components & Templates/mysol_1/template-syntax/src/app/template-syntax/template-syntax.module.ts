import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateSyntaxComponent } from './template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
  	HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: []
})
export class TemplateSyntaxModule { }
