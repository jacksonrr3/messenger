import Block, { Props } from '../../core/Block';
import InputBlock from '../../components/InputBlock';
import Button from '../../components/Button';
import './userSettingsPage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userSettingsTemplate from './userSettingsPage.template';
import { isValidInput } from '../../utils/validation';

export default class UserSettingsPage extends Block {
  constructor(props: Props) {
    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      middleSpan: true,
    });

    const login = new InputBlock({
      title: 'Логин',
      id: 'login',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const displayName = new InputBlock({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      middleSpan: true,
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      label: true,
      middleSpan: true,
    });

    const saveButton = new Button({
      text: 'Сохранить',
    });

    super('div', {
      ...props,
      attr: [['class', 'user-settings-container']],
      defaultAvatar,
      email,
      login,
      firstName,
      secondName,
      displayName,
      phone,
      saveButton,
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
    return this.compile(userSettingsTemplate, this._props);
  }
}
