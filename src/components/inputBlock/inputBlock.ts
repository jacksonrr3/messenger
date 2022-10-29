import Block, { Props } from '../../core/Block';
import './inputBlock.scss';
import inputTemplate from './inputBlock.template';
import Span from '../span';
import { inputValidation } from '../../utils/validation';

export default class Input extends Block {
  constructor(props: Props) {
    const errorMessageSpan = new Span({
      attr: [['class', 'error-message']],
    });

    super('div', {
      ...props,
      errorMessageSpan,
      attr: [['class', 'input-item']],
    });
  }

  addInnerEvents() {
    const input = this.element.querySelector('input');
    input?.addEventListener('focus', (e) => {
      console.log(`input focus, id: ${e.target?.id}, value: ${e.target?.value}`);
      // const spanText = inputValidation(e?.target);
      this.children.errorMessageSpan.setProps({
        spanText: 'focus',
      });
    });

    input?.addEventListener('blur', (e) => {
      console.log(`input blur, id: ${e.target?.id}, value: ${e.target?.value}`);
      this.children.errorMessageSpan.setProps({
        spanText: 'blur',
      });
    });
  }

  render() {
    return this.compile(inputTemplate, this._props);
  }
}
