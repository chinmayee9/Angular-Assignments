import { FirebaseAngularPage } from './app.po';

describe('firebase-angular App', () => {
  let page: FirebaseAngularPage;

  beforeEach(() => {
    page = new FirebaseAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
