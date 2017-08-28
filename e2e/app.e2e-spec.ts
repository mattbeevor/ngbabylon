import { BabPage } from './app.po';

describe('bab App', () => {
  let page: BabPage;

  beforeEach(() => {
    page = new BabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
