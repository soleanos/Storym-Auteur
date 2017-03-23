import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { StoryService } from '../story.service';
import { Story } from '../stories/stories.component';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
    private router : Router,
    private route: ActivatedRoute,
    private storyService: StoryService,
    private location: Location
  ) { }

  selectedChapter: Chapter;
  newChapter: any;
  chapters : Chapter[];


  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
  }

  getChapters = (story : Story) => {
    let chaps = [];
    if (story.chapters){
        for (let chap of story.chapters) {
          this.chapterService.getChapter(chap).then(chapter => chaps.push(chapter));
        }
    }
    return chaps;
  };

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.newChapter =  {};
    this.route.params.subscribe(params => {
      this.storyService.getStory(+params['id']).then(stories => this.chapters = this.getChapters(stories))
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/chapter', this.selectedChapter.id]);
  }

  add(chap: Chapter): void {
    console.log(chap);
    // title = title.trim();
    // if (!title) { return; }
    // this.chapterService.create(title)
    //   .then(chapter => {
    //     this.chapters.push(chapter);
    //     this.selectedChapter = null;
    //   });
  }

  delete(chapter: Chapter): void {
    this.chapterService
      .delete(chapter.id)
      .then(() => {
        this.chapters = this.chapters.filter(h => h !== chapter);
        if (this.selectedChapter === chapter) { this.selectedChapter = null; }
      });
  }
}


export class Chapter {
  id: number;
  text: string;
}
