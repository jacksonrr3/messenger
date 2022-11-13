import Block from './Block';
import { Route } from './Route';

// function isEqual(lhs: , rhs) {
//   return lhs === rhs;
// }

// function render(query, block) {
//   const root = document.querySelector(query);
//   root.textContent = block.getContent();
//   return root;
// }

// interface IRouter {
//   // static __instance: any;

// }

export class Router {
  static __instance: any;

  routes: Route[];
  history: History;
  _currentRoute: null | Route;
  _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  static getInstanse() {
    return Router.__instance;
  }

  use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route?.render();
  }

  go(pathname: string) {
    this.history.pushState({ pathname }, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route | null {
    const expectedRoute = this.routes.find((route) => route.match(pathname));
    return expectedRoute || null;
  }
}
