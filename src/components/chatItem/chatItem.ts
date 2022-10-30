import Block, { Props } from '../../core/Block';
import './chatItem.scss';
import round4747 from '../../../static/pictures/round_47_47.svg';
import chatItemTemplate from './chatItem.template';

export default class ChatItem extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      attr: [['class', 'chat-item']],
      round4747,
    });
  }

  render() {
    return this.compile(chatItemTemplate, this._props);
  }
}
