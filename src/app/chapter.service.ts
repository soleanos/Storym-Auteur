import { Injectable } from '@angular/core';
import { Chapter } from './chapters/chapters.component';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChapterService {

  private chaptersUrl = 'api/chapter';  // URL to web api
  // private chaptersUrl = 'http://192.168.1.13:2403/chapters';  // Mon

  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getChapters(): Promise<Chapter[]> {
    return this.http.get(this.chaptersUrl)
      .toPromise()
      .then(response => response.json().data as Chapter[])
      .catch(this.handleError);
  }

  getChapter(id: string): Promise<Chapter> {
    const url = `${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Chapter)
      .catch(this.handleError);
  }

  update(chapter: Chapter): Promise<Chapter> {
    const url = `${this.chaptersUrl}/${chapter.id}`;
    return this.http
      .put(url, JSON.stringify(chapter), {headers: this.headers})
      .toPromise()
      .then(() => chapter)
      .catch(this.handleError);
  }

  create(title: string): Promise<Chapter> {
    return this.http
      .post(this.chaptersUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.chaptersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
