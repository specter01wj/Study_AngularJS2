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
  {
    path: 'event-binding',
    loadChildren: () => import('./event-binding/event-binding.module').then(m => m.EventBindingModule)
  },
  {
    path: 'two-way-binding',
    loadChildren: () => import('./two-way-binding/two-way-binding.module').then(m => m.TwoWayBindingModule)
  },
  {
    path: 'built-in-directives',
    loadChildren: () => import('./built-in-directives/built-in-directives.module').then(m => m.BuiltInDirectivesModule)
  },
  {
    path: 'template-reference-variables',
    loadChildren: () => import('./template-reference-variables/template-reference-variables.module').then(m => m.TemplateReferenceVariablesModule)
  },
  {
    path: 'inputs-outputs',
    loadChildren: () => import('./inputs-outputs/inputs-outputs.module').then(m => m.InputsOutputsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
