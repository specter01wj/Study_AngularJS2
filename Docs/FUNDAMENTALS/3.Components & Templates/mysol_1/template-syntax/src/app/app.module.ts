import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateSyntaxModule } from './template-syntax/template-syntax.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
// import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingSyntaxComponent,
    AttributeBindingComponent,
    // TemplateSyntaxComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    TemplateSyntaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
