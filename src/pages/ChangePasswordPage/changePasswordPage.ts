import Block from '../../core/Block';
import './changePasswordPage.scss';
import changePasswordTemplate from './changePasswordPage.template';
import { InputBlock } from '../../components/InputBlock/index';
import { Form } from '../../components/Form';
import { Link } from '../../components/Link';
import { Router } from '../../core/Router';
import { makeSubmitHandler } from '../../utils/formHandler';
import { UserController } from '../../controllers/UserController';
import { Avatar } from '../../components/Avatar';
import { store } from '../../core/Store';
import { ROUTES } from '../../constants/routs';

const submitHandler = makeSubmitHandler((formData) => UserController.changeUserPassword(formData)
  .then(() => {
    Router.getInstanse().go(ROUTES.USER_PROFILE);
  }));

export default class ChangePasswordPage extends Block {
  constructor() {
    const { user } = store.getState();

    const userProfileLink = new Link({
      events: {
        click: (e) => {
          e.preventDefault();
          Router.getInstanse().go(ROUTES.USER_PROFILE);
        },
      },
    });

    const userAvatar = new Avatar({
      src: user.avatar,
      events: {
        click: () => {
          Router.getInstanse().go(ROUTES.CHANGE_AVATAR);
        },
      },
    });

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

    const form = new Form({
      className: 'settings',
      inputs: ['oldPassword', 'newPassword', 'repeatNewPassword'],
      oldPassword,
      newPassword,
      repeatNewPassword,
      formButtonText: 'Сохранить',
      submitHandler,
    });

    super('div', {
      attr: { class: 'change-password-container' },
      userAvatar,
      form,
      userProfileLink,
    });
  }

  render() {
    return this.compile(changePasswordTemplate, this._props);
  }
}
