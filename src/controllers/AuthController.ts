import { AuthAPI } from '../api/AuthAPI';
import { Router } from '../core/Router';

const authAPI = new AuthAPI();
const router = Router.getInstanse();

export class AuthController {
  static singIn(formData: FormData) {
    const userAuthData = {
      login: formData.get('login') as string,
      password: formData.get('password') as string,
    };

    return authAPI.singIn(userAuthData)
      .then((res) => {
        console.log(res);
        router.go('/messenger');
      })
      .catch((err) => {
        console.log('login err', err);
      });
  }

  static logout() {
    return authAPI.logOut()
      .then((res) => {
        console.log(res);
        router.go('/');
      })
      .catch((err) => {
        console.log('logout err', err);
      });
  }
}
