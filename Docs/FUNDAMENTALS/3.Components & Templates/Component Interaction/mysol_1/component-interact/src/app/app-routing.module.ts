import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	





	
	{ path: '', redirectTo: '/parent-to-child', pathMatch: 'full' },
  /*{
    path: 'binding-syntax',
    loadChildren: () => import('./binding-syntax/binding-syntax.module').then(m => m.BindingSyntaxModule)
  },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
