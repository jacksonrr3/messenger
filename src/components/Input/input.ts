import Block, { Props } from '../../core/Block';
import './input.scss';
import inputTemplate from './input.template';
import { validationErrorMessage, isValidInput } from '../../utils/validation';
import Span from '../Span';

const focusBlurHandler = (spanElement = new Span({})) => ({ target } : Event) => {
  const spanText = isValidInput(target as HTMLInputElement)
    ? ''
    : validationErrorMessage[target.id];
  spanElement.setProps({
    spanText,
  });
};

export default class Input extends Block {
  constructor(props: Props) {
    const {
      type, id, title, disabled, spanElement, value = '',
    } = props;

    const inputAttr = {
      type,
      id,
      name: id,
      placeholder: title,
      value,
    };

    super('input', {
      attr: inputAttr,
      events: {
        focus: focusBlurHandler(spanElement),
        blur: focusBlurHandler(spanElement),
      },
      disabled,
    });
  }

  render() {
    const input = this.getContent() as HTMLInputElement;
    input.disabled = this._props.disabled;
    return this.compile(inputTemplate, this._props);
  }

  setDisabled(disabled: boolean) {
    this.setProps({
      disabled,
    });
  }
}
