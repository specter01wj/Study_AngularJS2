import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: '/happy-birthday1', pathMatch: 'full' },
  {
    path: 'birthday-date-pipe',
    loadChildren: () => import('./birthday-date-pipe/birthday-date-pipe.module').then(m => m.BirthdayDatePipeModule)
  },
  {
    path: 'happy-birthday2',
    loadChildren: () => import('./hero-birthday2/hero-birthday2.module').then(m => m.HeroBirthday2Module)
  },
  {
    path: 'birthday-pipe-chaining',
    loadChildren: () => import('./birthday-pipe-chaining/birthday-pipe-chaining.module').then(m => m.BirthdayPipeChainingModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
