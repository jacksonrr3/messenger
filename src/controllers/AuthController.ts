import { AuthAPI, UserRegData } from '../api/AuthAPI';
import { Router } from '../core/Router';
import { store } from '../core/Store';
import getObjectFromFormData from '../utils/getObjectFromFormData';

const authAPI = new AuthAPI();

export class AuthController {
  static signUp(formData: FormData) {
    const userData = getObjectFromFormData(formData) as UserRegData;
    return authAPI
      .signUp(userData)
      .then((res) => {
        console.log(res);
        Router.getInstanse().go('/messenger');
      })
      .catch((err) => {
        console.log('signup err', err);
      });
  }

  static singIn(formData: FormData) {
    const userAuthData = {
      login: formData.get('login') as string,
      password: formData.get('password') as string,
    };

    return authAPI.signIn(userAuthData)
      .then((res) => {
        console.log(res);
        return authAPI.getUserInfo();
      })
      .then((user) => JSON.parse(user))
      .then((user) => {
        store.set('user', user);
        console.log('store', store.getState());
        Router.getInstanse().go('/messenger');
      })
      .catch((err) => {
        console.log('login err', err);
      });
  }

  static getUserInfo() {
    const { user } = store.getState();
    if (user) {
      console.log('user from store', user);
      return Promise.resolve(user);
    }
    return authAPI.getUserInfo()
      .then((userString) => JSON.parse(userString))
      .then((userObj) => store.set('user', userObj))
      .catch((err) => {
        console.log('auth err: ', err);
      });
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
