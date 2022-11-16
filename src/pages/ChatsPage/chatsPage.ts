import Block from '../../core/Block';
import './chatsPage.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chatsPage.template';
import ChatList from '../../components/ChatList';
import InputBlock from '../../components/InputBlock';
import { store } from '../../core/Store';
import ButtonBlock from '../../components/ButtonBlock';
import { Router } from '../../core/Router';

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

    const chatList = new ChatList({});

    const messageInput = new InputBlock({
      type: 'text',
      id: 'message',
      title: 'Сообщение',
      middleSpan: true,
    });

    super('div', {
      // ...props,
      attr: { class: 'chats-page-container' },
      round3434,
      threePoints,
      append,
      rightArrow,
      userProfileButton,
      chatList,
      messageInput,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
