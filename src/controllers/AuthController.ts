import { AuthAPI } from '../api/AuthAPI';
import { Router } from '../core/Router';
import { store } from '../core/Store';

const authAPI = new AuthAPI();

export class AuthController {
  static singIn(formData: FormData) {
    const userAuthData = {
      login: formData.get('login') as string,
      password: formData.get('password') as string,
    };

    return authAPI.singIn(userAuthData)
      .then((res) => {
        console.log(res);
        return authAPI.request();
      })
      .then((user) => JSON.parse(user))
      .then((user) => {
        store.set('user', user);
        console.log(store.getState());
        Router.getInstanse().go('/messenger');
      })
      .catch((err) => {
        console.log('login err', err);
      });
  }

  static getUserInfo() {
    return authAPI.request().then((user) => JSON.parse(user));
  }

  static logout() {
    return authAPI.logOut()
      .then(() => {
        Router.getInstanse().go('/');
      })
      .catch((err) => {
        console.log('logout err', err);
      });
  }
}
