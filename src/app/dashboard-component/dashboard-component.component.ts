import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Story } from '../stories-component/stories.component';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  constructor(private storyService: StoryService) { }

  stories: Story[] = [];

  ngOnInit() {

    this.storyService.getStories()
      .then(stories => this.stories = stories.slice(1, 5));
  }

}
