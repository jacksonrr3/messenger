import Block, { Props } from '../../core/Block';
import './auth.scss';
import authTemplate from './authPage.template';
import Input from '../../components/input';
import Button from '../../components/button';

export default class AuthPage extends Block {
  constructor(props: Props) {
    const loginInput = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      span: true,
    });

    const passwordInput = new Input({
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
      loginInput,
      passwordInput,
      authButton,
      noAccText: 'Нет аккаунта?',
      span: true,
    });
  }

  render() {
    return this.compile(authTemplate, this._props);
  }
}
