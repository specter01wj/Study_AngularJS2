import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

import { AdDirective } from './ad/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
