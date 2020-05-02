import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroAppMainComponent } from './hero-app-main/hero-app-main.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroControlsComponent } from './hero-controls/hero-controls.component';
import { QuestSummaryComponent } from './quest-summary/quest-summary.component';
import { HeroTeamComponent } from './hero-team/hero-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroAppMainComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    QuestSummaryComponent,
    HeroTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
