import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba por defecto', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Inicio');
  });
});
