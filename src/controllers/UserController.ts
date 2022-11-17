import { UserAPI, UserProfileData, UserPasswordData } from '../api/UserAPI';
import { Router } from '../core/Router';
import { store } from '../core/Store';
import getObjectFromFormData from '../utils/getObjectFromFormData';

const userAPI = new UserAPI();

export class UserController {
  static changeUserProfile(formData: FormData) {
    const userData = getObjectFromFormData(formData) as UserProfileData;
    return userAPI.changeProfile(userData)
      .then((res) => {
        const newUser = JSON.parse(res);
        console.log(newUser);
        store.set('user', newUser);
        Router.getInstanse().go('/user_profile');
      });
  }

  static changeUserPassword(formData: FormData) {
    const passwordData = getObjectFromFormData(formData) as UserPasswordData;
    return userAPI.changePassword(passwordData)
      .then((res) => {
        // const passwordChanged = JSON.parse(res);
        console.log(res);

        Router.getInstanse().go('/user_profile');
      });
  }

  // static singIn(formData: FormData) {
  //   const userAuthData = {
  //     login: formData.get('login') as string,
  //     password: formData.get('password') as string,
  //   };

  //   return userAPI.signIn(userAuthData)
  //     .then((res) => {
  //       console.log(res);
  //       return userAPI.getInfo();
  //     })
  //     .then((user) => JSON.parse(user))
  //     .then((user) => {
  //       store.set('user', user);
  //       console.log(store.getState());
  //       Router.getInstanse().go('/messenger');
  //     })
  //     .catch((err) => {
  //       console.log('login err', err);
  //     });
  // }
}