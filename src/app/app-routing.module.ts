import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { DetailHeroComponent } from './detail-hero/detail-hero.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';
import {  Routes,RouterModule}   from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponentComponent },
  { path: 'detail/:id', component: DetailHeroComponent },
  { path: 'heroes',     component: HeroesComponentComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
