import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomeComponent } from './components/main/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotfoundComponent } from './components/main/page-notfound/page-notfound.component';
import { LocalizationComponent } from './components/main/localization/localization.component';
import { HistoryComponent } from './components/main/history/history.component';
import { PeopleComponent } from './components/main/people/people.component';
import { WhatIsComponent } from './components/main/what-is/what-is.component';
import { VideosComponent } from './components/main/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FooterComponent,
    PageNotfoundComponent,
    LocalizationComponent,
    HistoryComponent,
    PeopleComponent,
    WhatIsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
