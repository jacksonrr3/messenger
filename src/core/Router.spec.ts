// eslint-disable-next-line import/no-extraneous-dependencies
import { assert } from 'chai';
import { Router } from './Router';
import Block from './Block';

class BlockStub extends Block {
  _render() { }
  getContent() {
    return document.createElement('div');
  }
}

describe('Router', () => {
  it('should be only one inctance', () => {
    const Router1 = new Router('root1');
    const Router2 = new Router('root2');
    assert.equal(Router1, Router2);
  });

  it('should add routs', () => {
    const router = new Router('root1');
    router.use('/', BlockStub);
    router.use('/index', BlockStub);
    router.go('/');
    assert.equal(window.location.pathname, '/');
    router.go('/index');
    assert.equal(window.location.pathname, '/index');
  });
});
