import { Mean1Page } from './app.po';

describe('mean1 App', () => {
  let page: Mean1Page;

  beforeEach(() => {
    page = new Mean1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
