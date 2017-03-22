import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoryService } from './story.service';
import { ChapterService } from './chapter.service';
import { AppComponent } from './app.component';
import { DetailStoryComponent } from './story/story.component';
import { StoriesComponent } from './stories/stories.component';
import { Routes,RouterModule}   from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ChaptersComponent } from './chapters/chapters.component';
import { DetailChapterComponent } from './chapter/chapter.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailStoryComponent,
    StoriesComponent,
    ChaptersComponent,
    DetailChapterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [RouterModule],
  providers: [StoryService,ChapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
