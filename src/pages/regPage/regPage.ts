import Block, { Props } from '../../core/Block';
import './regPage.scss';
import regTemplate from './regPage.template';
import Input from '../../components/input';
import Button from '../../components/button';

export default class RegPage extends Block {
  constructor(props: Props) {
    const emailInput = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      span: true,
    });

    const loginInput = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      span: true,
    });

    const firstNameInput = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      span: true,
    });

    const secondNameInput = new Input({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      span: true,
    });

    const phoneInput = new Input({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      span: true,
    });

    const passwordInput = new Input({
      title: 'Пароль',
      id: 'password',
      type: 'password',
      span: true,
    });

    const confirmPasswordInput = new Input({
      title: 'Подтвердить пароль',
      id: 'confirm_password',
      type: 'password',
      span: true,
    });

    const regButton = new Button({
      text: 'Зарегистрироваться',
    });

    super('div', {
      ...props,
      attr: [['class', 'reg-container']],
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      phoneInput,
      passwordInput,
      confirmPasswordInput,
      regButton,
      enter: 'Войти',
    });
  }

  render() {
    return this.compile(regTemplate, this._props);
  }
}
