import ErrorPage from '../../components/ErrorPage';

export default class Page404 extends ErrorPage {
  constructor() {
    super({
      message: 'Не туда попали',
      title: 404,
    });
  }
}
