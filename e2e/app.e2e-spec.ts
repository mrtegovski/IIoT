import { IIoTPage } from './app.po';

describe('iio-t App', () => {
  let page: IIoTPage;

  beforeEach(() => {
    page = new IIoTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
