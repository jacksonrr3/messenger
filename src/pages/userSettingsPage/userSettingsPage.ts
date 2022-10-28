import Block, { Props } from '../../core/Block';
import Input from '../../components/input';
import Button from '../../components/button';
import './userSettingsPage.scss';
import userSettingsTemplate from './userSettingsPage.template';

export default class UserSettingsPage extends Block {
  constructor(props: Props) {
    const emailInput = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      // span: true,
    });

    const loginInput = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      // span: true,
    });

    const firstNameInput = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      // span: true,
    });

    const secondNameInput = new Input({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      // span: true,
    });

    const displayName = new Input({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      // span: true,
    });

    const phoneInput = new Input({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      // span: true,
    });

    const saveButton = new Button({
      text: 'Сохранить',
    });

    super('div', {
      ...props,
      attr: [['class', 'user-settings-container']],
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayName,
      phoneInput,
      saveButton,
    });
  }

  render() {
    return this.compile(userSettingsTemplate, this._props);
  }
}
