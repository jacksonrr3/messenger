import Block, { Props } from '../../core/Block';
import './changePasswordPage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import changePasswordTemplate from './changePasswordPage.template';
import Input from '../../components/inputBlock/index';
import Button from '../../components/button';

export default class ChangePasswordPage extends Block {
  constructor(props: Props) {
    const oldPassword = new Input({
      title: 'Старый пароль',
      id: 'oldPassword',
      type: 'password',
      label: true,
      middleSpan: true,
    });

    const newPassword = new Input({
      title: 'Новый пароль',
      id: 'newPassword',
      type: 'password',
      label: true,
      middleSpan: true,
    });

    const repeatNewPassword = new Input({
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

  render() {
    return this.compile(changePasswordTemplate, this._props);
  }
}
