import { Injectable } from '@angular/core';
import { Story } from './stories-component/stories.component';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoryService {

  private storiesUrl = 'api/story';  // URL to web api
  // private storiesUrl = 'http://192.168.1.13:2403/stories';  // Mon

  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});

  getStories(): Promise<Story[]> {
    return this.http.get(this.storiesUrl)
      .toPromise()
      .then(response => response.json().data as Story[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getStory(id: number): Promise<Story> {
    const url = `${this.storiesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Story)
      .catch(this.handleError);
  }

  update(story: Story): Promise<Story> {
    const url = `${this.storiesUrl}/${story.id}`;
    return this.http
      .put(url, JSON.stringify(story), {headers: this.headers})
      .toPromise()
      .then(() => story)
      .catch(this.handleError);
  }

  create(title: string): Promise<Story> {
    return this.http
      .post(this.storiesUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.storiesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
