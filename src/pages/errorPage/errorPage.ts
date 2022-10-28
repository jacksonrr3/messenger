// import Handlebars from 'handlebars';
import Block, { Props } from '../../core/Block';
import errorPageTemplate from './errorPage.template';
import './errorPage.scss';

export default class ErrorPage extends Block {
  constructor(props: Props) {
    super('div', { ...props, attr: [['class', 'container']] });
  }

  render() {
    // return Handlebars.compile(errorPageTemplate)(this._props);
    return this.compile(errorPageTemplate, this._props);
  }
}
