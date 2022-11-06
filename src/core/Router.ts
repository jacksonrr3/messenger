import Block from './Block';
import Route from './Route';

function isEqual(lhs, rhs) {
  return lhs === rhs;
}

function render(query, block) {
  const root = document.querySelector(query);
  root.textContent = block.getContent();
  return root;
}

export class Router {
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event) => {
      // console.log('onpopstate');
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    const route = this.getRoute(pathname);

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname) {
    this.history.pushState({ pathname }, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
    const { pathname } = this.history.state;
    // console.log('back', this.history.state);
    // pathname && this._onRoute(pathname);
  }

  forward() {
    this.history.forward();
    const { pathname } = this.history.state;
    // console.log('forward', this.history.state);
    // pathname && this._onRoute(pathname);
  }

  getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}
