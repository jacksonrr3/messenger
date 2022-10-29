import Block, { Props } from '../../core/Block';
import Input from '../../components/inputBlock';
import Button from '../../components/button';
import './userSettingsPage.scss';
import userSettingsTemplate from './userSettingsPage.template';

export default class UserSettingsPage extends Block {
  constructor(props: Props) {
    const email = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      // span: true,
    });

    const login = new Input({
      title: 'Логин',
      id: 'login',
      type: 'text',
      // span: true,
    });

    const firstName = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      // span: true,
    });

    const secondName = new Input({
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

    const phone = new Input({
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
      email,
      login,
      firstName,
      secondName,
      displayName,
      phoneInput: phone,
      saveButton,
    });
  }

  render() {
    return this.compile(userSettingsTemplate, this._props);
  }
}
