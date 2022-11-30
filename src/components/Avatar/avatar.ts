import Block, { Props } from '../../core/Block';
import avatarTemplate from './avatar.template';
import './avatar.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import { store, StoreEvents } from '../../core/Store';
import { baseFilesUrl } from '../../constants/urls';

export class Avatar extends Block {
  constructor(props: Props) {
    const { className = 'avatar', src = '', events } = props;

    store.on(StoreEvents.Updated, () => {
      const { user } = store.getState();
        this.setProps({
          src: user?.avatar ? `${baseFilesUrl}${user.avatar}` : defaultAvatar,
        });
    });

    super('div', {
      attr: {
        class: className,
      },
      src: src ? `${baseFilesUrl}${src}` : defaultAvatar,
      events,
    });
  }

  render() {
    return this.compile(avatarTemplate, this._props);
  }
}
