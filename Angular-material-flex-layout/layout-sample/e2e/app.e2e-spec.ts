import { LayoutSamplePage } from './app.po';

describe('layout-sample App', () => {
  let page: LayoutSamplePage;

  beforeEach(() => {
    page = new LayoutSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
