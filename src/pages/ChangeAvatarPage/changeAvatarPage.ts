import Block from '../../core/Block';
import './changeAvatarPage.scss';
import changeAvatarTemplate from './changeAvatarPage.template';
import { InputBlock } from '../../components/InputBlock/index';
import { Router } from '../../core/Router';
import { Form } from '../../components/Form';
import { UserController } from '../../controllers/UserController';

export default class ChangeAvatarPage extends Block {
  constructor() {
    const avatarInput = new InputBlock({
      label: true,
      title: 'Выбрать файл на компьютере',
      id: 'avatar',
      type: 'file',
      accept: 'image/*',
    });

    const form = new Form({
      className: 'form',
      inputs: ['avatarInput'],
      avatarInput,
      formButtonText: 'Сохранить',
      submitHandler: (e: Event) => {
        e.preventDefault();
        const { target } = e;
        if (target) {
          const formData = new FormData(target as HTMLFormElement);
          UserController.changeUserAvatar(formData).then(() => {
            Router.getInstanse().go('/user_profile');
          });
        }
      },
    });

    super('div', {
      attr: { class: 'change-avatar-container' },
      // avatarInput,
      // saveButton,
      form,
      // enter: 'Войти',
    });
  }

  render() {
    return this.compile(changeAvatarTemplate, this._props);
  }
}
