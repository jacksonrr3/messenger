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

export class UserAPI {
  _http: HTTPTransport;

  constructor() {
    this._http = new HTTPTransport();
  }

  changeProfile(data: UserProfileData) {
    return this._http.put('/user/profile', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).catch((err) => {
      console.log('changeProfile error: ', err);
    });
  }

  changeAvatar(data: FormData) {
    return this._http.put('/user/profile/avatar', {
      body: data,
    }).catch((err) => {
      console.log('changeAvatar error: ', err);
    });
  }

  changePassword(data: UserPasswordData) {
    return this._http.put('/user/password', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).catch((err) => {
      console.log('changePassword error: ', err);
    });
  }

  getUserById(id: string) {
    return this._http.get(`/user/${id}`)
      .catch((err) => {
        console.log('getIserById error: ', err);
      });
  }

  searchUserByLogin(data: UserLogin) {
    return this._http.post('/user/search', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).catch((err) => {
      console.log('search user by login error: ', err);
    });
  }
}
