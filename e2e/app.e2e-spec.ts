import { AngularFirstLookHostedPage } from './app.po';

describe('angular-first-look-hosted App', () => {
  let page: AngularFirstLookHostedPage;

  beforeEach(() => {
    page = new AngularFirstLookHostedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fl works!');
  });
});
