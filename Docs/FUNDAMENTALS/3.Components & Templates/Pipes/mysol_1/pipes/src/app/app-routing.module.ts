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
  {
    path: 'power-booster',
    loadChildren: () => import('./power-booster/power-booster.module').then(m => m.PowerBoosterModule)
  },
  {
    path: 'power-boost-calc',
    loadChildren: () => import('./power-boost-calculator/power-boost-calculator.module').then(m => m.PowerBoostCalculatorModule)
  },
  {
    path: 'flying-heroes',
    loadChildren: () => import('./flying-heroes/flying-heroes.module').then(m => m.FlyingHeroesModule)
  },
  {
    path: 'flying-heroes-impure',
    loadChildren: () => import('./flying-heroes-impure/flying-heroes-impure.module').then(m => m.FlyingHeroesImpureModule)
  },
  {
    path: 'hero-message',
    loadChildren: () => import('./hero-message/hero-message.module').then(m => m.HeroMessageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
