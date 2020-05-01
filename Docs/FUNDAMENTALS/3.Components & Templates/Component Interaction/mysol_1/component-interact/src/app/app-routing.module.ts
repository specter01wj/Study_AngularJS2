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
  {
    path: 'parent-to-child-local-var',
    loadChildren: () => import('./parent-to-child-local-var/parent-to-child-local-var.module').then(m => m.ParentToChildLocalVarModule)
  },
  {
    path: 'parent-to-view-child',
    loadChildren: () => import('./parent-to-view-child/parent-to-view-child.module').then(m => m.ParentToViewChildModule)
  },
  {
    path: 'bidirectional-service',
    loadChildren: () => import('./bidirectional-service/bidirectional-service.module').then(m => m.BidirectionalServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
