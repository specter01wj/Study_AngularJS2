import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/parent-to-child', pathMatch: 'full' },
  {
    path: 'parent-to-child-setter',
    loadChildren: () => import('./parent-to-child-setter/parent-to-child-setter.module').then(m => m.ParentToChildSetterModule)
  },
  {
    path: 'parent-to-child-on-changes',
    loadChildren: () => import('./parent-to-child-on-changes/parent-to-child-on-changes.module').then(m => m.ParentToChildOnChangesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
