import Block, { Props } from '../../core/Block';
import './changePasswordPage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import changePasswordTemplate from './changePasswordPage.template';
import InputBlock from '../../components/inputBlock/index';
import Button from '../../components/button';
import { isValidInput } from '../../utils/validation';

export default class ChangePasswordPage extends Block {
  constructor(props: Props) {
    const oldPassword = new InputBlock({
      title: 'Старый пароль',
      id: 'oldPassword',
      type: 'password',
      label: true,
      middleSpan: true,
    });

    const newPassword = new InputBlock({
      title: 'Новый пароль',
      id: 'newPassword',
      type: 'password',
      label: true,
      middleSpan: true,
    });

    const repeatNewPassword = new InputBlock({
      title: 'Повторите новый пароль',
      id: 'password',
      type: 'password',
      label: true,
      middleSpan: true,
    });

    const saveButton = new Button({
      text: 'Сохранить',
    });

    super('div', {
      ...props,
      attr: [['class', 'change-password-container']],
      defaultAvatar,
      oldPassword,
      newPassword,
      repeatNewPassword,
      saveButton,
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
    return this.compile(changePasswordTemplate, this._props);
  }
}
