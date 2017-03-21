import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoryService } from './story.service';
import { AppComponent } from './app.component';
import { DetailStoryComponent } from './detail-story/detail-story.component';
import { StoriesComponent } from './stories-component/stories.component';
import {  Routes,RouterModule}   from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';

const routes: Routes = [
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailStoryComponent },
  { path: 'chapters', component: ChaptersComponent },
  { path: 'stories',     component: StoriesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
