import Block, { Props } from '../../core/Block';
import Input from '../../components/inputBlock/index';
import './userProfilePage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userProfileTemplate from './userProfilePage.template';

export default class userProfilePage extends Block {
  constructor(props: Props) {
    const email = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      disabled: 'disabled',
    });

    const login = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const firstName = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const secondName = new Input({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const displayName = new Input({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      disabled: 'disabled',
    });

    const phone = new Input({
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
