import Block, { Props } from '../../core/Block';
import './auth.scss';
import authTemplate from './authPage.template';
import Input from '../../components/inputBlock';
import Button from '../../components/button';

export default class AuthPage extends Block {
  constructor(props: Props) {
    const login = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      span: true,
    });

    const password = new Input({
      title: 'Пароль',
      id: 'password',
      type: 'password',
      span: true,
    });

    const authButton = new Button({
      text: 'Авторизоваться',
    });

    super('div', {
      ...props,
      attr: [['class', 'auth-container']],
      login,
      password,
      authButton,
      noAccText: 'Нет аккаунта?',
    });
  }

  addInnerEvents() {
    const form = this.element.querySelector('form');
    const formInputs = form?.querySelectorAll('input');
    const blockInputs = Array.from(formInputs).map((input) => this.children[input.id]);

    const formData = new FormData(form);

    console.log(form);
    console.log(formInputs);
    console.log(blockInputs)
  }

  render() {
    return this.compile(authTemplate, this._props);
  }
}
