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
  {
    path: 'child-to-parent',
    loadChildren: () => import('./child-to-parent/child-to-parent.module').then(m => m.ChildToParentModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
