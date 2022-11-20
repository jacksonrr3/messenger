// import Handlebars from 'handlebars';
import Block, { Props } from '../../core/Block';
import errorPageTemplate from './errorPage.template';
import './errorPage.scss';

export class ErrorPage extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      attr: { class: 'err-container' },
    });
  }

  render() {
    return this.compile(errorPageTemplate, this._props);
  }
}
