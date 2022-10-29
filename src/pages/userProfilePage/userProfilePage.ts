import Block, { Props } from '../../core/Block';
import Input from '../../components/inputBlock/index';
import './userProfilePage.scss';
import userProfileTemplate from './userProfilePage.template';

export default class userProfilePage extends Block {
  constructor(props: Props) {
    const emailInput = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      disabled: 'disabled',
    });

    const loginInput = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      disabled: 'disabled',
    });

    const firstNameInput = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      disabled: 'disabled',
    });

    const secondNameInput = new Input({
      title: 'Фамилия',
      id: 'second_name',
      type: 'text',
      disabled: 'disabled',
    });

    const displayName = new Input({
      title: 'Имя в чате',
      id: 'display_name',
      type: 'text',
      disabled: 'disabled',
    });

    const phoneInput = new Input({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      disabled: 'disabled',
    });

    super('div', {
      ...props,
      attr: [['class', 'user-profile-container']],
      emailInput,
      loginInput,
      firstNameInput,
      secondNameInput,
      displayName,
      phoneInput,
    });
  }

  render() {
    return this.compile(userProfileTemplate, this._props);
  }
}
