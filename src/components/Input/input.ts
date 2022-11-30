import Block, { Props } from '../../core/Block';
import './input.scss';
import inputTemplate from './input.template';
import { validationErrorMessage, isValidInput } from '../../utils/validation';
import { Span } from '../Span';
import { store, StoreEvents } from '../../core/Store';

type inputName = 'login'
  | 'password'
  | 'confirm_password'
  | 'oldPassword'
  | 'newPassword'
  | 'first_name'
  | 'second_name'
  | 'display_name'
  | 'email'
  | 'phone'
  | 'message';

const focusBlurHandler = (spanElement = new Span({})) => ({ target }: Event) => {
  const { id } = target as HTMLInputElement;
  const spanText = isValidInput(target as HTMLInputElement)
    ? ''
    : validationErrorMessage[id as inputName];

  spanElement.setProps({
    spanText,
  });
};

export class Input extends Block {
  constructor(props: Props) {
    const {
      type, id, title, disabled, spanElement, events = {}, accept,
    } = props;

    const { user } = store.getState();

    store.on(StoreEvents.Updated, () => {
      const { user: newUserData } = store.getState();
      if (!newUserData || this._props?.attr?.value !== newUserData[props.valueProp]) {
        const value = newUserData ? newUserData[props.valueProp] : '';
        this.setProps({
          attr: {
            type,
            id,
            name: id,
            placeholder: title,
            value: props.valueProp ? value : '',
            accept,
          },
        });
      }
    });

    const inputAttr = {
      type,
      id,
      name: id,
      placeholder: title,
      value: props.valueProp ? user[props.valueProp] : '',
      accept,
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
