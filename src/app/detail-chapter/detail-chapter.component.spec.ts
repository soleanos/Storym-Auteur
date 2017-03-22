import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChapterComponent } from './detail-chapter.component';

describe('DetailChapterComponent', () => {
  let component: DetailChapterComponent;
  let fixture: ComponentFixture<DetailChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailChapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
