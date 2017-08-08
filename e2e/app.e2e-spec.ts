import { DictionaryPage } from './app.po';

describe('dictionary App', () => {
  let page: DictionaryPage;

  beforeEach(() => {
    page = new DictionaryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
