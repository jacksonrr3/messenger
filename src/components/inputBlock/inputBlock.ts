import Block, { Props } from '../../core/Block';
import './inputBlock.scss';
import inputTemplate from './inputBlock.template';
import Span from '../span';
import { validationErrorMessage, isValidInput } from '../../utils/validation';

export default class Input extends Block {
  constructor(props: Props) {
    const errorMessageSpan = new Span({
      attr: [['class', 'error-message']],
    });

    super('div', {
      ...props,
      errorMessageSpan,
      attr: [['class', 'input-item']],
    });
  }

  addInnerEvents() {
    const input = this.element.querySelector('input');
    input?.addEventListener('focus', ({ target }) => {
      if (!isValidInput(target)) {
        this.children.errorMessageSpan.setProps({
          spanText: validationErrorMessage[target.id],
        });
      }
    });

    input?.addEventListener('blur', () => {
      this.children.errorMessageSpan.setProps({
        spanText: '',
      });
    });
  }

  render() {
    return this.compile(inputTemplate, this._props);
  }
}
