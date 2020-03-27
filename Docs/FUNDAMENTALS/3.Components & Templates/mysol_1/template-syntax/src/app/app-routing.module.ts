import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';

const routes: Routes = [
	{ path: '', redirectTo: '/template-syntax', pathMatch: 'full' },
	{ path: 'template-syntax', component: TemplateSyntaxComponent },
	{ path: 'binding-syntax', component: BindingSyntaxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
