import Block, { Props } from '../../core/Block';
import './changePasswordPage.scss';
import changePasswordTemplate from './changePasswordPage.template';
import Input from '../../components/input';
import Button from '../../components/button';

export default class ChangePasswordPage extends Block {
  constructor(props: Props) {
    const oldPassword = new Input({
      title: 'Старый пароль',
      id: 'oldPassword',
      type: 'password',
      // span: true,
    });

    const newPassword = new Input({
      title: 'Новый пароль',
      id: 'newPassword',
      type: 'password',
      // span: true,
    });

    const repeatNewPassword = new Input({
      title: 'Повторите новый пароль',
      id: 'repeatNewPassword',
      type: 'password',
      // span: true,
    });

    const saveButton = new Button({
      text: 'Сохранить',
    });

    super('div', {
      ...props,
      attr: [['class', 'change-passvord-container']],
      oldPassword,
      newPassword,
      repeatNewPassword,
      saveButton,
      enter: 'Войти',
    });
  }

  render() {
    return this.compile(changePasswordTemplate, this._props);
  }
}
