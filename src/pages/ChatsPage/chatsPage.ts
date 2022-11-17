import Block from '../../core/Block';
import './chatsPage.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chatsPage.template';
import ChatList from '../../components/ChatList';
import Input from '../../components/Input';
import { store } from '../../core/Store';
import ButtonBlock from '../../components/ButtonBlock';
import { Router } from '../../core/Router';
import { ChatController } from '../../controllers/ChatController';
import Chat from '../../components/Chat';

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

    const newChatButton = new ButtonBlock({
      text: 'Новый чат',
      events: {
        click: () => {
          const { newChatname: title } = store.getState();
          store.set('newChatname', '');
          ChatController.addChat(title).then(() => {
            ChatController.getChats();
          });
        },
      },
    });

    const chatSearchInput = new Input({
      type: 'text',
      id: 'search-input',
      title: 'Поиск',
      events: {
        focus: () => { },
        blur: (e) => {
          e.target.value = '';
        },
        input: (e) => {
          const { target } = e;
          store.set('newChatname', target.value);
          ChatController.getChats({ title: target.value });
        },
      },
    });

    const chat = new Chat({});

    const chatList = new ChatList({});

    super('div', {
      attr: { class: 'chats-page-container' },
      round3434,
      threePoints,
      append,
      rightArrow,
      userProfileButton,
      newChatButton,
      chatSearchInput,
      chatList,
      chat,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
