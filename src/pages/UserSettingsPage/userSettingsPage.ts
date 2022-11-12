import Block from '../../core/Block';
import InputBlock from '../../components/InputBlock';
import './userSettingsPage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userSettingsTemplate from './userSettingsPage.template';
import Form from '../../components/Form';

export default class UserSettingsPage extends Block {
  constructor() {
    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      middleSpan: true,
    });

    const login = new InputBlock({
      title: 'Логин',
      id: 'login',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const displayName = new InputBlock({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      label: true,
      middleSpan: true,
    });

    const form = new Form({
      className: 'settings',
      inputs: ['email', 'login', 'firstName', 'secondName', 'displayName', 'phone'],
      email,
      login,
      firstName,
      secondName,
      displayName,
      phone,
      formButtonText: 'Сохранить',
    });

    super('div', {
      attr: { class: 'user-settings-container' },
      defaultAvatar,
      form,
    });
  }

  render() {
    return this.compile(userSettingsTemplate, this._props);
  }
}
