import Block, { Props } from '../../core/Block';
import './inputBlock.scss';
import inputTemplate from './inputBlock.template';
import Span from '../span';
import { validationErrorMessage, isValidInput } from '../../utils/validation';

const focusBlurHandler = (spanElement: Block) => ({ target } : Event) => {
  const spanText = isValidInput(target as HTMLInputElement) ? '' : validationErrorMessage[target.id];
  spanElement.setProps({
    spanText,
  });
};

export default class InputBlock extends Block {
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
    input?.addEventListener('focus', focusBlurHandler(this.children.errorMessageSpan));
    input?.addEventListener('blur', focusBlurHandler(this.children.errorMessageSpan));
  }

  render() {
    return this.compile(inputTemplate, this._props);
  }
}
