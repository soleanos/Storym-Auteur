import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoryService } from './story.service';
import { AppComponent } from './app.component';
import { DetailStoryComponent } from './detail-story/detail-story.component';
import { StoriesComponent } from './stories-component/stories.component';
import { Routes,RouterModule}   from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DetailStoryComponent,
    StoriesComponent,
    DashboardComponentComponent,
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
  providers: [StoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
