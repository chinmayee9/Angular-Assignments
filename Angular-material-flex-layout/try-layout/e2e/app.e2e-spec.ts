import { TryLayoutPage } from './app.po';

describe('try-layout App', () => {
  let page: TryLayoutPage;

  beforeEach(() => {
    page = new TryLayoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
