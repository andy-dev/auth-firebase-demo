import { AuthDemoPage } from './app.po';

describe('auth-demo App', () => {
  let page: AuthDemoPage;

  beforeEach(() => {
    page = new AuthDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
