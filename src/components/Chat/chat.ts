import Block from '../../core/Block';
import './chat.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chat.template';
import InputBlock from '../InputBlock';
import Input from '../Input';
import Button from '../Button';
import { store, StoreEvents } from '../../core/Store';
import ButtonBlock from '../ButtonBlock';
import { Router } from '../core/Router';
import { ChatController } from '../../controllers/ChatController';

const getChatFromStateById = (): any => {
  const { chatId } = store.getState();
  const { chats } = store.getState();
  return chats?.find((el) => el.id === Number(chatId));
};

export default class ChatsPage extends Block {
  constructor() {
    const chat = getChatFromStateById();

    store.on(StoreEvents.Updated, () => {
      this.setProps({
        chat: getChatFromStateById(),
      });
    });

    const treePointsButton = new Button({
      text: `<img src="${threePoints}" alt="three_points_button">`,
    });

    const messageInput = new InputBlock({
      type: 'text',
      id: 'message',
      title: 'Сообщение',
      middleSpan: true,
    });

    const sendMessageButton = new Button({
      text: `<img src="${rightArrow}" alt="send_button">`,
      events: {
        click: () => {
          const { inputElement } = messageInput.children;
          const { value } = inputElement.element;
          console.log('message click', value);
          inputElement.element.value = '';
        },
      },
    });

    super('div', {
      attr: { class: 'chat' },
      round3434,
      append,
      rightArrow,
      treePointsButton,
      chat,
      messageInput,
      sendMessageButton,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
