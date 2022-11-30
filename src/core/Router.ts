import Block from './Block';
import { Route } from './Route';

type RouteOptions = {
  needAuth?: boolean;
  redirectIfAuthTo?: string,
};

export class Router {
  static __instance: any;

  routes: Route[];
  history: History;
  checkAuth: () => Promise<boolean>;
  _defaultPath: string;
  _currentRoute: null | Route;
  _rootQuery: string;

  constructor(rootQuery: string, defaultPath = '/') {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._defaultPath = defaultPath;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  static getInstanse() {
    return Router.__instance;
  }

  setAuthChecker(checkAuth: () => Promise<boolean>) {
    this.checkAuth = checkAuth;
    return this;
  }

  use(pathname: string, block: typeof Block, options: RouteOptions = {}) {
    console.log(options);
    const { needAuth, redirectIfAuthTo } = options;
    const route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
      needAuth,
      redirectIfAuthTo,
    });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  async _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    const isAuth = await this.checkAuth();

    if (route?.needAuth && !isAuth) {
      this.go(this._defaultPath);
      return;
    }

    if (route?.redirectIfAuthTo && isAuth) {
      this.go(route?.redirectIfAuthTo);
      return;
    }

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
