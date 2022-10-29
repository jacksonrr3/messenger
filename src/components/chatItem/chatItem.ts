import Block, { Props } from '../../core/Block';
import './chatItem.scss';
import chatItemTemplate from './chatItem.template';

export default class ChatItem extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      attr: [['class', 'chat-item']],
    });
  }

  render() {
    return this.compile(chatItemTemplate, this._props);
  }
}
