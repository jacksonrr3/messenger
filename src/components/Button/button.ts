import Block, { Props } from '../../core/Block';
import buttonTemplate from './button.template';

export default class ButtonBlock extends Block {
  constructor(props: Props) {
    super('button', {
      ...props,
    });
  }

  render() {
    return this.compile(buttonTemplate, this._props);
  }
}
