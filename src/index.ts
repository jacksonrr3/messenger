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

const AppRouter = new Router('#root', '/');

const app = async () => {
  const checkAuth = async () => {
    const userInfo = await AuthController.getUserInfo();
    console.log('userInfo', userInfo);
    return userInfo !== undefined;
  };

  AppRouter
    .setAuthChecker(checkAuth)
    .use('/', AuthPage, {
      redirectIfAuthTo: '/messenger',
    })
    .use('/reg', RegPage, {
      redirectIfAuthTo: '/messenger',
    })
    .use('/messenger', ChatsPage, {
      needAuth: true,
    })
    .use('/404', Page404)
    .use('/500', Page500)
    .use('/user_profile', UserProfilePage, {
      needAuth: true,
    })
    .use('/user_settings', UserSettingsPage, {
      needAuth: true,
    })
    .use('/change_password', ChangePasswordPage, {
      needAuth: true,
    })
    .use('/change_avatar', ChangeAvatarPage, {
      needAuth: true,
    })
    .start();
};

app();
