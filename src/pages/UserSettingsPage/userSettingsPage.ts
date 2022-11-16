import Block from '../../core/Block';
import InputBlock from '../../components/InputBlock';
import './userSettingsPage.scss';
import defaultAvatar from '../../../static/pictures/default_avatar.svg';
import userSettingsTemplate from './userSettingsPage.template';
import Form from '../../components/Form';
import Link from '../../components/Link';
import { Router } from '../../core/Router';
import { store } from '../../core/Store';
import { isValidInput } from '../../utils/validation';
import { UserController } from '../../controllers/UserController';
import { makeSubmitHandler } from '../../utils/formHandler';

// const submitHandler = (e: Event) => {
//   e.preventDefault();
//   const { target } = e;
//   const formData = new FormData(target as HTMLFormElement);
//   if (target) {
//     const formInputs = target.querySelectorAll('input');

//     const isValid = Array.from(formInputs)
//       .reduce((acc, input) => (acc && isValidInput(input as HTMLInputElement)), true);

//     if (isValid) {
//       UserController.changeUserProfile(formData);
//     } else {
//       console.log('invalud form data');
//     }
//   }
// };

const submitHandler = makeSubmitHandler(UserController.changeUserProfile);

export default class UserSettingsPage extends Block {
  constructor() {
    const { user } = store.getState();

    const userProfilePage = new Link({
      events: {
        click: (e) => {
          e.preventDefault();
          Router.getInstanse().go('/user_profile');
        },
      },
    });

    const email = new InputBlock({
      title: 'Почта',
      id: 'email',
      type: 'email',
      label: true,
      middleSpan: true,
      value: user.email,
    });

    const login = new InputBlock({
      title: 'Логин',
      id: 'login',
      type: 'text',
      label: true,
      middleSpan: true,
      value: user.login,
    });

    const firstName = new InputBlock({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      label: true,
      middleSpan: true,
      value: user.first_name,
    });

    const secondName = new InputBlock({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      label: true,
      middleSpan: true,
      value: user.second_name,
    });

    const displayName = new InputBlock({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      label: true,
      middleSpan: true,
      value: user.display_name,
    });

    const phone = new InputBlock({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      label: true,
      middleSpan: true,
      value: user.phone,
    });

    const form = new Form({
      className: 'settings',
      inputs: ['email', 'login', 'firstName', 'secondName', 'displayName', 'phone'],
      email,
      login,
      firstName,
      secondName,
      displayName,
      phone,
      formButtonText: 'Сохранить',
      submitHandler,
    });

    super('div', {
      attr: { class: 'user-settings-container' },
      defaultAvatar,
      form,
      userProfilePage,
    });
  }

  render() {
    return this.compile(userSettingsTemplate, this._props);
  }
}
