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

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FooterComponent,
    PageNotfoundComponent,
    LocalizationComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
