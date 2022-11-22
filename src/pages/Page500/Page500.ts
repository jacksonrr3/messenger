import { ErrorPage } from '../../components/ErrorPage';

export default class Page404 extends ErrorPage {
  constructor() {
    super({
      message: 'Мы уже фиксим',
      title: 500,
    });
  }
}
