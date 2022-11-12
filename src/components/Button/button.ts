import Block, { Props } from '../../core/Block';
import buttonTemplate from './button.template';

export default class Button extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      attr: { class: 'btn' },
    });
  }

  render() {
    return this.compile(buttonTemplate, this._props);
  }
}
