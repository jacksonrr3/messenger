import Block, { Props } from '../../core/Block';
import linkTemplate from './link.template';
import './link.scss';

export default class Button extends Block {
  constructor(props: Props) {
    const className = props.className || 'nav-link';
    super('a', {
      attr: [['class', className]],
      ...props,
    });
  }

  render() {
    return this.compile(linkTemplate, this._props);
  }
}
