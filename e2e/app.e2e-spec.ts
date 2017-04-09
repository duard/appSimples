import { AppSimplesPage } from './app.po';

describe('app-simples App', () => {
  let page: AppSimplesPage;

  beforeEach(() => {
    page = new AppSimplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
