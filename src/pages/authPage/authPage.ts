import Block, { Props } from '../../core/Block';
import './auth.scss';
import authTemplate from './authPage.template';
import Input from '../../components/inputBlock';
import Button from '../../components/button';
import { isValidInput } from '../../utils/validation';

export default class AuthPage extends Block {
  constructor(props: Props) {
    const login = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      label: true,
      span: true,
    });

    const password = new Input({
      title: 'Пароль',
      id: 'password',
      type: 'password',
      label: true,
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

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());
      const isValid = Array.from(formInputs)
        .reduce((acc, input) => (acc && isValidInput(input)), true);

      console.log('submit', formDataObject, isValid);
    });
  }

  render() {
    return this.compile(authTemplate, this._props);
  }
}
