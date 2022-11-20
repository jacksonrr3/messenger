import Block, { Props } from '../../core/Block';
import avatarTemplate from './avatar.template';
import './avatar.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import { store, StoreEvents } from '../../core/Store';

const baseUrl = `https://ya-praktikum.tech/api/v2/resources`;

export class Avatar extends Block {
  constructor(props: Props) {
    const { className = 'avatar', src = '', events } = props;

    store.on(StoreEvents.Updated, () => {
      const { user } = store.getState();
      this.setProps({
        src: `${baseUrl}${user.avatar}`,
      });
    });


    super('div', {
      attr: {
        class: className,
      },
      src: `${baseUrl}${src}`,
      defaultAvatar,
      events,
    });
  }

  render() {
    return this.compile(avatarTemplate, this._props);
  }
}
