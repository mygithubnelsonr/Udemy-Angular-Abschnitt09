import { MytestPage } from './app.po';

describe('mytest App', () => {
  let page: MytestPage;

  beforeEach(() => {
    page = new MytestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
