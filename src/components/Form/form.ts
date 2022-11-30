import Block, { Props } from '../../core/Block';
import formTemplate from './form.template';
import { ButtonBlock } from '../ButtonBlock';
import { isValidInput } from '../../utils/validation';

const defaultSubmitHandler = (e: Event) => {
  e.preventDefault();
  const { target } = e;
  if (target) {
    const formData = new FormData(target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData.entries());
    const formInputs = (target as HTMLFormElement).querySelectorAll('input');
    const isValid = Array.from(formInputs)
      .reduce((acc, input) => (acc && isValidInput(input as HTMLInputElement)), true);

    console.log('submit', formDataObject, isValid ? 'форма валидна' : 'форма не валидна');
  }
};

export class Form extends Block {
  constructor(props: Props) {
    const formButton = new ButtonBlock({
      text: props.formButtonText,
    });

    const { inputs, className, submitHandler } = props;

    super('form', {
      template: formTemplate(inputs),
      formButton,
      attr: { class: className },
      events: {
        submit: submitHandler ?? defaultSubmitHandler,
      },
      ...props,
    });
  }

  render() {
    return this.compile(this._props.template, this._props);
  }
}
