import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: '/peek-a-boo', pathMatch: 'full' },
  {
    path: 'spy',
    loadChildren: () => import('./spy/spy.module').then(m => m.SpyModule)
  },
  {
    path: 'on-changes',
    loadChildren: () => import('./on-changes/on-changes.module').then(m => m.OnChangesModule)
  },
  {
    path: 'on-check',
    loadChildren: () => import('./on-check/on-check.module').then(m => m.DoCheckModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
