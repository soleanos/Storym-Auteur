import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {

  constructor(private storyService: StoryService,  private location: Location, private router : Router) { }

  ngOnInit() {
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.storyService.create(title);
    this.router.navigate(['/stories'])
  }
  goBack(): void {
    this.location.back();
  }
}
