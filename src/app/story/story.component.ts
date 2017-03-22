import { Component, OnInit } from '@angular/core';
import { Story } from '../stories/stories.component';
import { Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { StoryService } from '../story.service';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-story',
  moduleId: module.id,
  templateUrl: 'story.component.html',
  styleUrls: ['story.component.css']
})
export class DetailStoryComponent implements OnInit {
  @Input()
  story: Story;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  save(): void {
    this.storyService.update(this.story)
      .then(() => this.goBack());
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.storyService.getStory(+params['id']))
      .subscribe(story => this.story = story);
  }

  showChapters(){
    this.router.navigate(['/chapters', this.story.id]);
  }
  goBack(): void {
    this.location.back();
  }
}
