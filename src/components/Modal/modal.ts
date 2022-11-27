import Block, { Props } from '../../core/Block';
import modalTemplate from './modal.template';
import './modal.scss';
import { Button } from '../Button';
import { Input } from '../Input';

export class Modal extends Block {
  constructor(props: Props) {
    const {
      title, clickHandler, inputTitle, inputName,
    } = props;

    const input = new Input({
      type: 'text',
      id: inputName,
      title: inputTitle,
      events: {
        blur: () => { },
        focus: () => { },
      },
    });

    const button = new Button({
      text: 'Сохранить',
      events: {
        click: () => {
          const { value } = input.element as HTMLInputElement;
          clickHandler(value);
          (input.element as HTMLInputElement).value = '';
        },
      },
    });

    super('div', {
      title,
      attr: {
        class: 'modal-container',
      },
      input,
      button,
    });
  }

  render() {
    return this.compile(modalTemplate, this._props);
  }
}
