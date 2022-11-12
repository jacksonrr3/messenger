import Block, { Props } from '../../core/Block';
import spanTemplate from './span.template';
import './span.scss';

export default class Span extends Block {
  constructor(props: Props) {
    super('span', {
      ...props,
      attr: { class: 'error-validation-text' },
    });
  }

  render() {
    return this.compile(spanTemplate, this._props);
  }
}
