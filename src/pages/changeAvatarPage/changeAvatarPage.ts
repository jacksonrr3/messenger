import Block, { Props } from '../../core/Block';
import './changeAvatarPage.scss';
import changeAvatarTemplate from './changeAvatarPage.template';
import InputBlock from '../../components/inputBlock/index';
import Button from '../../components/button';

export default class ChangeAvatarPage extends Block {
  constructor(props: Props) {
    const avatarInput = new InputBlock({
      label: true,
      title: 'Выбрать файл на компьютере',
      id: 'avatarInput',
      type: 'file',
    });

    const saveButton = new Button({
      text: 'Сохранить',
    });

    super('div', {
      ...props,
      attr: [['class', 'change-avatar-container']],
      avatarInput,
      saveButton,
      enter: 'Войти',
    });
  }

  render() {
    return this.compile(changeAvatarTemplate, this._props);
  }
}
