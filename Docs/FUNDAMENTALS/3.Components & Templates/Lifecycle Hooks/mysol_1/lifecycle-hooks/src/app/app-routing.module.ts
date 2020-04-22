import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: '/peek-a-boo', pathMatch: 'full' },
  {
    path: 'spy',
    loadChildren: () => import('./spy/spy.module').then(m => m.SpyModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
