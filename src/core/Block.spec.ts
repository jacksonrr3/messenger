// eslint-disable-next-line import/no-extraneous-dependencies
import { assert } from 'chai';
import Block, { Props } from './Block';

const template = '{{text}}';

class BlockStub extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this._props);
  }
}

describe('Block ', () => {
  it('getContent should return block element', () => {
    const block = new BlockStub({});
    assert.equal(block.getContent(), block.element);
  });

  it('should changes after block props changed', () => {
    const block = new BlockStub({
      text: 'text1',
    });

    assert.equal(block.getContent().innerHTML, 'text1');

    block.setProps({
      text: 'text2',
    });

    assert.equal(block.getContent().innerHTML, 'text2');
  });
});
