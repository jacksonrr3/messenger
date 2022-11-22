import Block, { Props } from '../../core/Block';
import linkTemplate from './link.template';
import './link.scss';

export class Link extends Block {
  constructor(props: Props) {
    const { className = '', href = '' } = props;
    super('a', {
      attr: {
        href,
        class: `nav-link ${className}`,
      },
      ...props,
    });
  }

  render() {
    return this.compile(linkTemplate, this._props);
  }
}
