import Block, { Props } from '../../core/Block';
import linkTemplate from './link.template';
import './link.scss';

export default class Button extends Block {
  constructor(props: Props) {
    const { className = '' } = props;
    super('a', {
      attr: [['class', `nav-link ${className}`]],
      ...props,
    });
  }

  render() {
    return this.compile(linkTemplate, this._props);
  }
}
