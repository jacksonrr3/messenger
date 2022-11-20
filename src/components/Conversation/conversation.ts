import Block, { Props } from '../../core/Block';
import conversationTemplate from './conversation.template';
import './conversation.scss';

export class Conversation extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      attr: {
        class: 'conversation',
      },
    });
  }

  render() {
    return this.compile(conversationTemplate, this._props);
  }
}
