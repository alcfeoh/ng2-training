import { MigrationRpojectPage } from './app.po';

describe('migration-rpoject App', function() {
  let page: MigrationRpojectPage;

  beforeEach(() => {
    page = new MigrationRpojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
