import Block from '../../core/Block';
import './auth.scss';
import authTemplate from './authPage.template';
import InputBlock from '../../components/InputBlock';
import Form from '../../components/Form';
import Link from '../../components/Link';
import { AuthController } from '../../controllers/AuthController';
import { isValidInput } from '../../utils/validation';

const submitHandler = (e: Event) => {
  e.preventDefault();
  const { target } = e;
  const formData = new FormData(target as HTMLFormElement);
  const formInputs = target.querySelectorAll('input');

  const isValid = Array.from(formInputs)
    .reduce((acc, input) => (acc && isValidInput(input as HTMLInputElement)), true);

  if (isValid) {
    AuthController.singIn(formData);
  } else {
    console.log('invalud form data');
  }
};

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
      className: 'form',
      inputs: ['login', 'password'],
      login,
      password,
      formButtonText: 'Авторизоваться',
      submitHandler,
    });

    const link = new Link({
      className: 'form-link',
      text: 'Нет аккаунта?',
      href: '/reg',
    });

    super('div', {
      attr: { class: 'auth-container' },
      titleText: 'Вход',
      form,
      link,
    });
  }

  render() {
    return this.compile(authTemplate, this._props);
  }
}
