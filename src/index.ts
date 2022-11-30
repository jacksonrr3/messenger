import { Router } from './core/Router';
import AuthPage from './pages/AuthPage';
import RegPage from './pages/RegPage';
import ChatsPage from './pages/ChatsPage';
import Page404 from './pages/Page404';
import Page500 from './pages/Page500';
import UserProfilePage from './pages/UserProfilePage';
import UserSettingsPage from './pages/UserSettingsPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import ChangeAvatarPage from './pages/ChangeAvatarPage';
import './styles/base.scss';
import { AuthController } from './controllers/AuthController';
import { ROUTES } from './constants/routs';

const AppRouter = new Router('#root', ROUTES.AUTH);

const app = async () => {
  const checkAuth = async () => {
    const userInfo = await AuthController.getUserInfo();
    return userInfo !== undefined;
  };

  AppRouter
    .setAuthChecker(checkAuth)
    .use(ROUTES.AUTH, AuthPage, {
      redirectIfAuthTo: ROUTES.MESSENGER,
    })
    .use(ROUTES.REG, RegPage, {
      redirectIfAuthTo: ROUTES.MESSENGER,
    })
    .use(ROUTES.MESSENGER, ChatsPage, {
      needAuth: true,
    })
    .use(ROUTES.PAGE404, Page404)
    .use(ROUTES.PAGE500, Page500)
    .use(ROUTES.USER_PROFILE, UserProfilePage, {
      needAuth: true,
    })
    .use(ROUTES.USER_SETTINGS, UserSettingsPage, {
      needAuth: true,
    })
    .use(ROUTES.CHANGE_PASSWORD, ChangePasswordPage, {
      needAuth: true,
    })
    .use(ROUTES.CHANGE_AVATAR, ChangeAvatarPage, {
      needAuth: true,
    })
    .start();
};

app();
