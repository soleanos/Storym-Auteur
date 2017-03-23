import { Component, OnInit } from '@angular/core';
import { Chapter } from '../chapters/chapters.component';
import { Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { ChapterService } from '../chapter.service';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-detail-chapter',
  templateUrl: 'chapter.component.html',
  styleUrls: ['chapter.component.css']
})
export class DetailChapterComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  chapter: Chapter;

  save(): void {
    this.chapterService.update(this.chapter)
      .then(() => this.goBack());
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.chapterService.getChapter(this.chapterService.forgeUrlApi(params['id'])))
      .subscribe(chapter => this.chapter = chapter)
  }

  showChapters(){
    this.router.navigate(['/chapters', this.chapter.id]);
  }
  goBack(): void {
    this.location.back();
  }

}
