  import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-stories-component',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private storyService: StoryService, private router : Router) { }

  selectedStory: Story;
  openAddComponent : Boolean;

  stories : Story[];
  onSelect(story: Story): void {
    this.selectedStory = story;
  }

  getStories(): void {
    this.storyService.getStories().then(stories => this.stories = stories);
    console.log(this.stories)
  }
  ngOnInit(): void {
    this.getStories();
    this.openAddComponent = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStory.id]);
  }

  ShowAddComponent(): void {
    this.openAddComponent = true;
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.storyService.create(title)
      .then(story => {
        this.stories.push(story);
        this.selectedStory = null;
      });
  }

  delete(story: Story): void {
    this.storyService
      .delete(story.id)
      .then(() => {
        this.stories = this.stories.filter(h => h !== story);
        if (this.selectedStory === story) { this.selectedStory = null; }
      });
  }
}


export class Story {
  id: number;
  title: string;
  chapters: any;
  synopsis:string;
}

