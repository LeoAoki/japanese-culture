import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/main/history/history.component';
import { HomeComponent } from './components/main/home/home.component';
import { LocalizationComponent } from './components/main/localization/localization.component';
import { PageNotfoundComponent } from './components/main/page-notfound/page-notfound.component';
import { PeopleComponent } from './components/main/people/people.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'localization', component: LocalizationComponent },
  { path: 'people', component: PeopleComponent },

  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
