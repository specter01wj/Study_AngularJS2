import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TemplateSyntaxModule } from './template-syntax/template-syntax';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
// import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './template-syntax/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingSyntaxComponent,
    // TemplateSyntaxComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateSyntaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
