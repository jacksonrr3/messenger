import Block, { Props } from '../../core/Block';
import './input.scss';
import inputTemplate from './input.template';

export default class Input extends Block {
  constructor(props: Props) {
    super('div', {
      ...props,
      attr: [['class', 'input-item']],
    });
  }

  render() {
    return this.compile(inputTemplate, this._props);
  }
}
