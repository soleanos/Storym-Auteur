import { NgModule } from '@angular/core';
import { DetailStoryComponent } from './detail-story/detail-story.component';
import { StoriesComponent } from './stories-component/stories.component';
import {  Routes,RouterModule}   from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';
import { DetailChapterComponent } from './detail-chapter/detail-chapter.component';

const routes: Routes = [
  { path: '', redirectTo: '/stories', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailStoryComponent },
  { path: 'chapters/:id', component: ChaptersComponent },
  { path: 'stories',     component: StoriesComponent },
  { path: 'chapter/:id',     component: DetailChapterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
