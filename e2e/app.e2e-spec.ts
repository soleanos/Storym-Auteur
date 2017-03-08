import { StorymAuteurPage } from './app.po';

describe('storym-auteur App', function() {
  let page: StorymAuteurPage;

  beforeEach(() => {
    page = new StorymAuteurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
