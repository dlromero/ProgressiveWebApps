import { PwaPage } from './app.po';

describe('pwa App', () => {
  let page: PwaPage;

  beforeEach(() => {
    page = new PwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
