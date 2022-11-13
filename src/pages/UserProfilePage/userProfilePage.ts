import Block from '../../core/Block';
import InputBlock from '../../components/InputBlock/index';
import './userProfilePage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userProfileTemplate from './userProfilePage.template';
import Button from '../../components/ButtonBlock';

export default class userProfilePage extends Block {
  constructor() {
    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
    });

    const login = new InputBlock({
      title: 'Логин',
      id: 'login',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
    });

    const displayName = new InputBlock({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
    });

    const exitButton = new Button({
      text: 'Выйти',
      event: {
        click: (e) => {
          console.log('button');
        },
      },
    });

    super('div', {
      attr: { class: 'user-profile-container' },
      defaultAvatar,
      email,
      login,
      firstName,
      secondName,
      displayName,
      phone,
      exitButton,
    });
  }

  render() {
    return this.compile(userProfileTemplate, this._props);
  }
}
