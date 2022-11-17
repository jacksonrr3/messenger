import Block, { Props } from '../../core/Block';
import './input.scss';
import inputTemplate from './input.template';
import { validationErrorMessage, isValidInput } from '../../utils/validation';
import Span from '../Span';
import { store, StoreEvents } from '../../core/Store';

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
      type, id, title, disabled, spanElement, events = {},
    } = props;

    const { user } = store.getState();

    store.on(StoreEvents.Updated, () => {
      const { user: newUserData } = store.getState();
      this.setProps({
        attr: {
          type,
          id,
          name: id,
          placeholder: title,
          value: props.valueProp ? newUserData[props.valueProp] : '',
        },
      });
    });

    const inputAttr = {
      type,
      id,
      name: id,
      placeholder: title,
      value: props.valueProp ? user[props.valueProp] : '',
    };

    super('input', {
      attr: inputAttr,
      events: {
        focus: focusBlurHandler(spanElement),
        blur: focusBlurHandler(spanElement),
        ...events,
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
