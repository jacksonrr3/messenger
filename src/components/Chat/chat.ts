import Block from '../../core/Block';
import './chat.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chat.template';
import InputBlock from '../InputBlock';
import Button from '../Button';
import { store, StoreEvents } from '../../core/Store';
import Modal from '../Modal';
import Input from '../Input';
import ButtonBlock from '../ButtonBlock';
import { Router } from '../core/Router';
import { ChatController } from '../../controllers/ChatController';
import { UserController } from '../../controllers/UserController';

const getChatFromStateById = (): any => {
  const { chatId } = store.getState();
  const { chats } = store.getState();
  return chats?.find((el) => el.id === chatId);
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
      events: {
        click: () => {
          const modal = document.getElementById('modal');
          if (modal?.style.display === 'flex') {
            modal.style.display = 'none';
          } else {
            modal.style.display = 'flex';
          }
          console.log(modal.style.display)
        },
      },
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

    const addUserModal = new Modal({
      title: 'Добавить пользователя',
      inputTitle: 'введите имя',
      clickHandler: (userName: string) => {
        const { chatId } = store.getState();
        if (chatId) {
          // ChatController.addUsersToChat([userName], chatId);
          UserController.getUserIdByLogin(userName);
        }
        addUserModal.hide();
      },
    });

    const deleteUserModal = new Modal({
      title: 'Удалить пользователя',
      inputTitle: 'введите имя',
      clickHandler: (userName: string) => {
        const { chatId } = store.getState();
        if (chatId) {
          UserController.getUserIdByLogin(userName);

          // ChatController.deleteUsersfromChat([userName], chatId);
        }
        deleteUserModal.hide();
      },
    });

    const addUserButton = new Button({
      text: 'Добавить пользователя',
      events: {
        click: () => {
          addUserModal.show();
        },
      },
    });

    const deleteUserButton = new Button({
      text: 'Удалить пользователя',
      events: {
        click: () => {
          deleteUserModal.show();
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
      addUserModal,
      deleteUserModal,
      addUserButton,
      deleteUserButton,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
