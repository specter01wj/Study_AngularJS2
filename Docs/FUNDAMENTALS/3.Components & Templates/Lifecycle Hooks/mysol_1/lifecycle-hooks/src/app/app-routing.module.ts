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
    path: 'do-check',
    loadChildren: () => import('./do-check/do-check.module').then(m => m.DoCheckModule)
  },
  {
    path: 'after-view',
    loadChildren: () => import('./after-view/after-view.module').then(m => m.AfterViewModule)
  },
  {
    path: 'after-content',
    loadChildren: () => import('./after-content/after-content.module').then(m => m.AfterContentModule)
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
