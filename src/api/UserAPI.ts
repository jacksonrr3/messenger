import { HTTPTransport } from '../utils/HTTPTransport';
import { baseUrl } from '../constants/urls';

export type UserProfileData = {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export type UserPasswordData = {
  oldPassword: string,
  newPassword: string
}

export type UserLogin = {
  login: string,
}

export class UserAPI {
  _http: HTTPTransport;

  constructor() {
    this._http = new HTTPTransport(baseUrl);
  }

  changeProfile(data: UserProfileData) {
    return this._http.put('/user/profile', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  changeAvatar(data: FormData) {
    return this._http.put('/user/profile/avatar', {
      body: data,
    });
  }

  changePassword(data: UserPasswordData) {
    return this._http.put('/user/password', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  getUserById(id: string) {
    return this._http.get(`/user/${id}`);
  }

  searchUserByLogin(data: UserLogin) {
    return this._http.post('/user/search', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}
