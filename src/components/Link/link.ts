import Block, { Props } from '../../core/Block';
import linkTemplate from './link.template';
import './link.scss';

export default class Button extends Block {
  constructor(props: Props) {
    super('a', {
      ...props,
      attr: [['class', 'nav-link']],
    });
  }

  render() {
    return this.compile(linkTemplate, this._props);
  }
}
