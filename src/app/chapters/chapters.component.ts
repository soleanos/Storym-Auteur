import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  constructor(
    private chapterService: ChapterService,
    private router : Router
  ) { }

  selectedChapter: Chapter;
  chapters : Chapter[];
  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
    console.log(chapter);
  }

  getChapters(): void {
    this.chapterService.getChapters().then(chapters => this.chapters = chapters);
    console.log(this.chapters)
  }
  ngOnInit(): void {
    this.getChapters();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedChapter.id]);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.chapterService.create(title)
      .then(chapter => {
        this.chapters.push(chapter);
        this.selectedChapter = null;
      });
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
