import Block from '../../core/Block';
import InputBlock from '../../components/InputBlock/index';
import './userProfilePage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userProfileTemplate from './userProfilePage.template';
import Button from '../../components/Button';
import { AuthController } from '../../controllers/AuthController';
import { store } from '../../core/Store';

export default class userProfilePage extends Block {
  constructor() {
    const { user } = store.getState();

    console.log('store from prof', user);

    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
      value: user.email,
    });

    const login = new InputBlock({
      title: 'Логин',
      id: 'login',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
      value: user.login,
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
      value: user.first_name,
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
      value: user.second_name,
    });

    const displayName = new InputBlock({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
      value: user.display_name,
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      label: true,
      middleSpan: true,
      disabled: 'disabled',
      value: user.phone,
    });

    const exitButton = new Button({
      text: 'Выйти',
      events: {
        click: async () => {
          await AuthController.logout();
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
