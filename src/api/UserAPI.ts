import { HTTPTransport } from '../utils/HTTPTransport';

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

export class AuthAPI {
  _http: HTTPTransport;

  constructor(http: HTTPTransport) {
    this._http = http;
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

  getUser(id: string) {
    return this._http.get(`/user/${id}`);
  }

  searchUser(data: UserLogin) {
    return this._http.post('/user/search', {
      body: data,
    });
  }
}
