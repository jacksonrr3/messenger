import Block, { Props } from '../../core/Block';
import './regPage.scss';
import regTemplate from './regPage.template';
import InputBlock from '../../components/InputBlock';
import Button from '../../components/Button';
import { isValidInput } from '../../utils/validation';

export default class RegPage extends Block {
  constructor(props: Props) {
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

  addInnerEvents() {
    const form = this.element.querySelector('form');
    const formInputs = form?.querySelectorAll('input');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());
      const isValid = Array.from(formInputs)
        .reduce((acc, input) => (acc && isValidInput(input)), true);

      console.log('submit', formDataObject, isValid ? 'форма валидна' : 'форма не валидна');
    });
  }

  render() {
    return this.compile(regTemplate, this._props);
  }
}