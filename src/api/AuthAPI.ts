import { HTTPTransport } from '../utils/HTTPTransport';

// export type APIMethod = (options?: object) => Promise<any> | void;
export type UserAuthData = { login: string, password: string };
export type UserRegData = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string,
};

export class AuthAPI {
  _http: HTTPTransport;

  constructor() {
    this._http = new HTTPTransport();
  }

  signUp(data: UserRegData) {
    return this._http.post('/auth/signup', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  signIn(data: UserAuthData) {
    return this._http.post('/auth/signin', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  logOut() {
    return this._http.post('/auth/logout');
  }

  getUserInfo() {
    return this._http.get('/auth/user');
  }
}
