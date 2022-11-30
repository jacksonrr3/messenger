import { ROUTES } from '../constants/routs';
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
        store.set('user', newUser);
        Router.getInstanse().go(ROUTES.USER_PROFILE);
      })
      .catch((err) => {
        console.log('change profile err: ', err);
      });
  }

  static changeUserPassword(formData: FormData) {
    const passwordData = getObjectFromFormData(formData) as UserPasswordData;
    return userAPI.changePassword(passwordData)
      .then((res) => {
        console.log('passwordChanged', res);

        Router.getInstanse().go(ROUTES.USER_PROFILE);
      })
      .catch((err) => {
        console.log('change password err: ', err);
      });
  }

  static changeUserAvatar(formData: FormData) {
    return userAPI.changeAvatar(formData)
      .then((res) => {
        console.log('avatar changed', res);
      })
      .catch((err) => {
        console.log('change avatar err: ', err);
      });
  }

  static getUsersByLogin(login: string) {
    return userAPI.searchUserByLogin({ login })
      .then((res) => JSON.parse(res))
      .catch((err) => {
        console.log(`get user by id, error: ${err.response}`);
      });
  }
}
