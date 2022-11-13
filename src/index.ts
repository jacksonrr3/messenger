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

const AppRouter = new Router('#root');
AppRouter
  // .use('/', NavPage)
  .use('/', AuthPage)
  .use('/reg', RegPage)
  .use('/messenger', ChatsPage)
  .use('/404', Page404)
  .use('/500', Page500)
  .use('/user_profile', UserProfilePage)
  .use('/user_settings', UserSettingsPage)
  .use('/change_password', ChangePasswordPage)
  .use('/change_avatar', ChangeAvatarPage)
  .start();
