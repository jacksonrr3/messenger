import Block, { Props } from '../../core/Block';
import InputBlock from '../../components/inputBlock/index';
import './userProfilePage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userProfileTemplate from './userProfilePage.template';

export default class userProfilePage extends Block {
  constructor(props: Props) {
    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      disabled: 'disabled',
    });

    const login = new InputBlock({
      title: 'Имя',
      id: 'login',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const displayName = new InputBlock({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      label: true,
      disabled: 'disabled',
    });

    super('div', {
      ...props,
      attr: [['class', 'user-profile-container']],
      defaultAvatar,
      email,
      login,
      firstName,
      secondName,
      displayName,
      phoneInput: phone,
    });
  }

  render() {
    return this.compile(userProfileTemplate, this._props);
  }
}
