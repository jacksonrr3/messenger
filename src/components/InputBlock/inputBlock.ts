import Block, { Props } from '../../core/Block';
import './inputBlock.scss';
import inputTemplate from './inputBlock.template';
import { Span } from '../Span';
import { Input } from '../Input';

export class InputBlock extends Block {
  constructor(props: Props) {
    const messageSpan = new Span({
      attr: { class: 'error-message' },
    });

    const inputElement = new Input({
      ...props,
      spanElement: messageSpan,
    });

    super('div', {
      ...props,
      inputElement,
      messageSpan,
      attr: { class: 'input-item' },
    });
  }

  render() {
    return this.compile(inputTemplate, this._props);
  }
}
