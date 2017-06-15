import { FormFundamentalsPage } from './app.po';

describe('form-fundamentals App', function() {
  let page: FormFundamentalsPage;

  beforeEach(() => {
    page = new FormFundamentalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
