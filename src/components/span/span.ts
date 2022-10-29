import Block, { Props } from '../../core/Block';
import spanTemplate from './span.template';

export default class Button extends Block {
  constructor(props: Props) {
    super('span', {
      ...props,
    });
  }

  render() {
    return this.compile(spanTemplate, this._props);
  }
}
