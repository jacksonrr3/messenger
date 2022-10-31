import Block, { Props } from '../../core/Block';
import './navPage.scss';
import regTemplate from './navPage.template';
import Link from '../../components/Link';
import renderDom from '../../utils/renderDom';
import AuthPage from '../AuthPage';
import ErrorPage from '../ErrorPage';
import RegPage from '../RegPage';
import UserProfilePage from '../UserProfilePage';
import UserSettingsPage from '../UserSettingsPage';
import ChangePasswordPage from '../ChangePasswordPage';
import ChangeAvatarPage from '../ChangeAvatarPage';
import ChatsPage from '../ChatsPage/chatsPage';

export default class NavPage extends Block {
  constructor(props: Props) {
    const authLink = new Link({
      text: 'Авторизация',
      events: {
        click: () => {
          renderDom('root', new AuthPage({}));
        },
      },
    });

    const regLink = new Link({
      text: 'Регистрация',
      events: {
        click: () => {
          renderDom('root', new RegPage({}));
        },
      },
    });

    const chatsLink = new Link({
      text: 'Чаты',
      events: {
        click: () => {
          renderDom('root', new ChatsPage({}));
        },
      },
    });

    const page404Link = new Link({
      text: '404',
      events: {
        click: () => {
          renderDom('root', new ErrorPage({
            message: 'Не туда попали',
            title: 404,
          }));
        },
      },
    });

    const page500Link = new Link({
      text: '500',
      events: {
        click: () => {
          renderDom('root', new ErrorPage({
            message: 'Мы уже фиксим',
            title: 500,
          }));
        },
      },
    });

    const userProfileLink = new Link({
      text: 'Профиль пользователя',
      events: {
        click: () => {
          renderDom('root', new UserProfilePage({}));
        },
      },
    });

    const userSettingsLink = new Link({
      text: 'Пользовательские настройки',
      events: {
        click: () => {
          renderDom('root', new UserSettingsPage({}));
        },
      },
    });

    const changePasswordLink = new Link({
      text: 'Изменить пароль',
      events: {
        click: () => {
          renderDom('root', new ChangePasswordPage({}));
        },
      },
    });

    const changeAvatarlink = new Link({
      text: 'Изменить аватар',
      events: {
        click: () => {
          renderDom('root', new ChangeAvatarPage({}));
        },
      },
    });

    super('div', {
      ...props,
      attr: [['class', 'nav-page']],
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