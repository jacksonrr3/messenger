import Block, { Props } from './Block';

function isEqualPath(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

function render(query: string, block: Block | null) {
  const root = document.querySelector(query);
  if (block) {
    root?.appendChild(block?.getContent());
  }
  return root;
}

export class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: null | Block;
  _props: Props;
  needAuth: boolean;
  redirectIfAuthTo: string;

  constructor(pathname: string, view: typeof Block, props: Props) {
    const { needAuth, redirectIfAuthTo, ...rest } = props;
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = rest;
    this.needAuth = props.needAuth;
    this.redirectIfAuthTo = props.redirectIfAuthTo;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqualPath(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}
