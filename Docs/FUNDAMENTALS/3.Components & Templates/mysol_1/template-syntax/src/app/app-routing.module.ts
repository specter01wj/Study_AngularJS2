import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/template-syntax', pathMatch: 'full' },
	// { path: 'template-syntax', component: TemplateSyntaxComponent },
  {
    path: 'binding-syntax',
    loadChildren: () => import('./binding-syntax/binding-syntax.module').then(m => m.BindingSyntaxModule)
  },
	{
    path: 'property-binding',
    // loadChildren: './property-binding/property-binding.module#PropertyBindingModule'
    loadChildren: () => import('./property-binding/property-binding.module').then(m => m.PropertyBindingModule)
  },
  {
    path: 'attribute-binding',
    loadChildren: () => import('./attribute-binding/attribute-binding.module').then(m => m.AttributeBindingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
