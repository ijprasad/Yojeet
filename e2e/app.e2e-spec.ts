import { YojeetPage } from './app.po';

describe('yojeet App', () => {
  let page: YojeetPage;

  beforeEach(() => {
    page = new YojeetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
