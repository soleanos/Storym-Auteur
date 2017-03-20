import { HERONIPage } from './app.po';

describe('storyni App', () => {
  let page: HERONIPage;

  beforeEach(() => {
    page = new HERONIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
