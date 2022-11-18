import Block, { Props } from '../../core/Block';
import modalTemplate from './modal.template';
import './modal.scss';
import ButtonBlock from '../Button';
import Input from '../Input';
import { store } from '../../core/Store';

export default class Modal extends Block {
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

    const button = new ButtonBlock({
      text: 'Сохранить',
      events: {
        click: () => {
          const { value } = input.element;
          const { chatId } = store.getState();
          clickHandler(value, chatId);
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
