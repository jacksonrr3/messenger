import Block from '../../core/Block';
import './chatsPage.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chatsPage.template';
import ChatList from '../../components/ChatList';
import InputBlock from '../../components/InputBlock';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { store } from '../../core/Store';
import ButtonBlock from '../../components/ButtonBlock';
import { Router } from '../../core/Router';
import { ChatController } from '../../controllers/ChatController';

export default class ChatsPage extends Block {
  constructor(/* props: Props */) {
    console.log('store from messenger', store.getState());

    const userProfileButton = new ButtonBlock({
      text: 'Профиль',
      events: {
        click: () => {
          Router.getInstanse().go('/user_profile');
        },
      },
    });
    // <input type="text" id="search-input" placeholder="Поиск">
    const chatSearchInput = new Input({
      type: 'text',
      id: 'search-input',
      title: 'Поиск',
      events: {
        focus: () => { },
        blur: () => { },
        input: (e) => {
          const { target } = e;
          ChatController.getChats({ title: target.value });
        },
      },
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
        click: (e) => {
          const { inputElement } = messageInput.children;
          const { value } = inputElement.element;
          console.log('message click', value);
          inputElement.element.value = '';
        },
      },
    });

    const chatList = new ChatList({});

    super('div', {
      attr: { class: 'chats-page-container' },
      round3434,
      threePoints,
      append,
      rightArrow,
      userProfileButton,
      chatSearchInput,
      chatList,
      treePointsButton,
      messageInput,
      sendMessageButton,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
