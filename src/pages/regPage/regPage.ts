import Block, { Props } from '../../core/Block';
import './regPage.scss';
import regTemplate from './regPage.template';
import Input from '../../components/inputBlock';
import Button from '../../components/button';

export default class RegPage extends Block {
  constructor(props: Props) {
    const email = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      span: true,
    });

    const login = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      span: true,
    });

    const firstName = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      span: true,
    });

    const secondName = new Input({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      span: true,
    });

    const phone = new Input({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      span: true,
    });

    const password = new Input({
      title: 'Пароль',
      id: 'password',
      type: 'password',
      span: true,
    });

    const confirmPassword = new Input({
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
      email,
      login,
      firstName,
      secondName,
      phone,
      password,
      confirmPassword,
      regButton,
      enter: 'Войти',
    });
  }

  render() {
    return this.compile(regTemplate, this._props);
  }
}
