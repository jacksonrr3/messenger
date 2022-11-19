import { assert } from 'chai';
import { Router } from '../../src/core/Router';

describe('Router', () => {
  it('should be only one inctance', () => {
    const Router1 = new Router('root1');
    const Router2 = new Router('root2');
    assert.equal(Router1, Router2);
  });
});
