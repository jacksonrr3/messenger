// import { BaseAPI } from './BaseAPI';
import { HTTPTransport } from '../utils/HTTPTransport';

export type APIMethod = (options?: object) => Promise<any> | void;
export type UserAuthData = { login: string, password: string };

export class AuthAPI {
  _http: HTTPTransport;

  constructor() {
    this._http = new HTTPTransport();
  }

  singIn(data: UserAuthData) {
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

  request() {
    return this._http.get('/auth/user');
  }
}
