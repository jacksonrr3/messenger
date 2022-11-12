import Block from '../../core/Block';
import './chatsPage.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chatsPage.template';
import ChatItem from '../../components/ChatItem';
import InputBlock from '../../components/InputBlock';

export default class ChatsPage extends Block {
  constructor(/* props: Props */) {
    const chatItem = new ChatItem({
      userName: 'Андрей',
      textPreview: 'Изображение',
      time: '10:49',
      unreadMessageCont: 2,
    });

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
      chatItem,
      messageInput,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
