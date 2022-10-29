import Block, { Props } from '../../core/Block';
import './chatsPage.scss';
import chatsTemplate from './chatsPage.template';
// import Button from '../../components/button';
import ChatItem from '../../components/chatItem';
import InputBlock from '../../components/inputBlock';

export default class ChatsPage extends Block {
  constructor(props: Props) {
    const chatItem = new ChatItem({
      userName: 'Андрей',
      textPreview: 'Изображение',
      time: '10:49',
      unreadMessageCont: 2,
    });

    const messageInput = new InputBlock({
      class: 'message-input',
      type: 'text',
      id: 'message',
      title: 'Сообщение',
    });

    super('div', {
      ...props,
      attr: [['class', 'chats-page-container']],
      chatItem,
      messageInput,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
