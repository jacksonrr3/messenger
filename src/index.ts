import Handlebars from 'handlebars';
import template from './index.template';
import renderDom from './utils/renderDom';
// import Block from './core/Block';
import ErrorPage from './pages/errorPage/errorPage';

const routes = {
  // '/auth': authPage,
  // '/reg': regPage,
  // '/chats': chatsPage,
  // '/404': 404,
  // '/500': 500,
  // '/user_profile': userProfilePage,
  // '/user_settings': userSettingsPage,
  // '/change_password': changePasswordPage,
  // '/change_avatar': changeAvatarPage,
};

console.log(window.location.pathname);
const navMenuTemplate = Handlebars.compile(template);
const el = document.getElementById('root');

switch (window.location.pathname) {
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
  default:
    if (el) {
      el.innerHTML = navMenuTemplate({});
    }
}
