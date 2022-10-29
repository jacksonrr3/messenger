import Block, { Props } from '../../core/Block';
import Input from '../../components/inputBlock/index';
import './userProfilePage.scss';
import userProfileTemplate from './userProfilePage.template';

export default class userProfilePage extends Block {
  constructor(props: Props) {
    const email = new Input({
      title: 'Почта',
      id: 'email',
      type: 'email',
      disabled: 'disabled',
    });

    const login = new Input({
      title: 'Имя',
      id: 'login',
      type: 'text',
      disabled: 'disabled',
    });

    const firstName = new Input({
      title: 'Имя',
      id: 'first_name',
      type: 'text',
      disabled: 'disabled',
    });

    const secondName = new Input({
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

    const phone = new Input({
      title: 'Телефон',
      id: 'phone',
      type: 'tel',
      disabled: 'disabled',
    });

    super('div', {
      ...props,
      attr: [['class', 'user-profile-container']],
      email,
      login,
      firstName,
      secondName,
      displayName,
      phoneInput: phone,
    });
  }

  render() {
    return this.compile(userProfileTemplate, this._props);
  }
}
