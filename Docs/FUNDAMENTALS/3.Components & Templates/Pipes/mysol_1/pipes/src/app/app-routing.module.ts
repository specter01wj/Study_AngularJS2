import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: '/happy-birthday1', pathMatch: 'full' },
  {
    path: 'birthday-date-pipe',
    loadChildren: () => import('./birthday-date-pipe/birthday-date-pipe.module').then(m => m.BirthdayDatePipeModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
