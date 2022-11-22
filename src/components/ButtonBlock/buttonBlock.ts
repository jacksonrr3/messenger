import Block, { Props } from '../../core/Block';
import buttonTemplate from './buttonBlock.template';
import { Button } from '../Button';

export class ButtonBlock extends Block {
  constructor(props: Props) {
    const { text, events } = props;
    const button = new Button({
      text,
      events,
    });

    super('div', {
      // ...props,
      attr: { class: 'btn' },
      button,
    });
  }

  render() {
    return this.compile(buttonTemplate, this._props);
  }
}
