import { AuthAPI, UserRegData } from '../api/AuthAPI';
import { Router } from '../core/Router';
import { store } from '../core/Store';

const authAPI = new AuthAPI();

const getObjectFromFormData = (data: FormData) => {
  const res = {};
  data.delete('confirm_password');
  Array.from(data.keys()).forEach((key) => {
    res[key] = data.get(key);
  });
  return res;
};

export class AuthController {
  static signUp(formData: FormData) {
    const userData = getObjectFromFormData(formData) as UserRegData;
    console.log(userData);
    return authAPI
      .signUp(userData)
      .then((res) => {
        console.log(res);
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
        return authAPI.getInfo();
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
    const { user } = store.getState();
    if (user) {
      return Promise.resolve(user);
    }
    return authAPI.getInfo()
      .then((userString) => JSON.parse(userString))
      .then((userObj) => store.set('user', userObj));
  }

  static logout() {
    return authAPI.loguot()
      .then(() => {
        Router.getInstanse().go('/');
      })
      .catch((err) => {
        console.log('logout err', err);
      });
  }
}
