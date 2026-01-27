import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';

import { TemplateSyntaxComponent } from './template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BigHeroDetailComponent } from './big-hero-detail/big-hero-detail.component';
import { SizerComponent } from './sizer/sizer.component';
import { heroSwitchComponents } from './hero-switch.components';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
  	TemplateSyntaxComponent,
  	HeroDetailComponent,
  	BigHeroDetailComponent,
  	SizerComponent,
    heroSwitchComponents,
    HeroFormComponent,
    SvgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  exports: []
})
export class TemplateSyntaxModule { }
