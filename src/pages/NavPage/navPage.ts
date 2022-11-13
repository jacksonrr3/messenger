import Block from '../../core/Block';
import Link from '../../components/Link';
import './navPage.scss';
import regTemplate from './navPage.template';

export default class NavPage extends Block {
  constructor() {
    const authLink = new Link({
      text: 'Авторизация',
      href: '/',
    });

    const regLink = new Link({
      text: 'Регистрация',
      href: '/reg',
    });

    const chatsLink = new Link({
      text: 'Чаты',
      href: '/messenger',
    });

    const page404Link = new Link({
      text: '404',
      href: '/404',
    });

    const page500Link = new Link({
      text: '500',
      href: '/500',
    });

    const userProfileLink = new Link({
      text: 'Профиль пользователя',
      href: '/user_profile',
    });

    const userSettingsLink = new Link({
      text: 'Пользовательские настройки',
      href: '/user_settings',
    });

    const changePasswordLink = new Link({
      text: 'Изменить пароль',
      href: '/change_password',
    });

    const changeAvatarlink = new Link({
      text: 'Изменить аватар',
      href: '/change_avatar',
    });

    super('div', {
      attr: { class: 'nav-page' },
      authLink,
      regLink,
      chatsLink,
      page404Link,
      page500Link,
      userProfileLink,
      userSettingsLink,
      changePasswordLink,
      changeAvatarlink,
    });
  }

  render() {
    return this.compile(regTemplate, this._props);
  }
}
