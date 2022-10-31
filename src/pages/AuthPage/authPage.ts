import Block from '../../core/Block';
import './auth.scss';
import authTemplate from './authPage.template';
import InputBlock from '../../components/InputBlock';
import Form from '../../components/Form';
import Link from '../../components/Link';

export default class AuthPage extends Block {
  constructor() {
    const login = new InputBlock({
      title: 'Имя',
      id: 'login',
      type: 'text',
      label: true,
      span: true,
    });

    const password = new InputBlock({
      title: 'Пароль',
      id: 'password',
      type: 'password',
      label: true,
      span: true,
    });

    const form = new Form({
      linkText: 'Нет аккаунта?',
      inputs: ['login', 'password'],
      login,
      password,
      formClass: 'form',
    });

    const link = new Link({
      text: 'Нет аккаунта?',
      className: 'form-link',
    });

    super('div', {
      // ...props,
      attr: [['class', 'auth-container']],
      titleText: 'Вход',
      form,
      link,
    });
  }

  render() {
    return this.compile(authTemplate, this._props);
  }
}
