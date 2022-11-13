import { AuthAPI } from '../api/AuthAPI';

const authAPI = new AuthAPI();

export class AuthController {
  static singIn(formData: FormData) {
    const userAuthData = {
      login: formData.get('login') as string,
      password: formData.get('password') as string,
    };
    return authAPI.singIn(userAuthData);
  }

  static logout() {
    return authAPI.logOut();
  }
}
