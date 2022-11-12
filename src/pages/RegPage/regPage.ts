import Block from '../../core/Block';
import './regPage.scss';
import regTemplate from './regPage.template';
import InputBlock from '../../components/InputBlock';
import Form from '../../components/Form';
import Link from '../../components/Link';

export default class RegPage extends Block {
  constructor() {
    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      span: true,
    });

    const login = new InputBlock({
      title: 'Логин',
      id: 'login',
      type: 'text',
      label: true,
      span: true,
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      span: true,
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      span: true,
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
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

    const confirmPassword = new InputBlock({
      title: 'Подтвердить пароль',
      id: 'confirm_password',
      type: 'password',
      label: true,
      span: true,
    });

    const form = new Form({
      className: 'form',
      inputs: ['email', 'login', 'firstName', 'secondName', 'phone', 'password', 'confirmPassword'],
      email,
      login,
      firstName,
      secondName,
      phone,
      password,
      confirmPassword,
      formButtonText: 'Зарегистрироваться',
    });

    const link = new Link({
      text: 'Войти',
      className: 'form-link',
      href: '/auth',
    });

    super('div', {
      attr: { class: 'reg-container' },
      titleText: 'Регистрация',
      form,
      link,
    });
  }

  render() {
    return this.compile(regTemplate, this._props);
  }
}
