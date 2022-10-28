import Handlebars from 'handlebars';
import template from './index.template';
import renderDom from './utils/renderDom';
// import Block from './core/Block';
import ErrorPage from './pages/errorPage';
import AuthPage from './pages/authPage';
import RegPage from './pages/regPage';
import UserProfilePage from './pages/userProfilePage';
import UserSettingsPage from './pages/userSettingsPage';
import ChangePasswordPage from './pages/changePasswordPage';

// const routes = {
//   // '/auth': authPage,
//   // '/reg': regPage,
//   // '/chats': chatsPage,
//   // '/404': 404,
//   // '/500': 500,
//   // '/user_profile': userProfilePage,
//   // '/user_settings': userSettingsPage,
//   // '/change_password': changePasswordPage,
//   // '/change_avatar': changeAvatarPage,
// };

console.log(window.location.pathname);
const navMenuTemplate = Handlebars.compile(template);
const el = document.getElementById('root');

switch (window.location.pathname) {
  case '/auth':
    renderDom('root', new AuthPage({}));
    break;
  case '/reg':
    renderDom('root', new RegPage({}));
    break;
  case '/404':
    renderDom('root', new ErrorPage({
      message: 'Не туда попали',
      title: 404,
    }));
    break;
  case '/500':
    renderDom('root', new ErrorPage({
      message: 'Мы уже фиксим',
      title: 500,
    }));
    break;
  case '/user_profile':
    renderDom('root', new UserProfilePage({}));
    break;
  case '/user_settings':
    renderDom('root', new UserSettingsPage({}));
    break;
  case '/change_password':
    renderDom('root', new ChangePasswordPage({}));
    break;
  default:
    if (el) {
      el.innerHTML = navMenuTemplate({});
    }
}
