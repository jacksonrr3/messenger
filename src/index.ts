import Handlebars from 'handlebars';
import template from './index.template';
import renderDom from './utils/renderDom';
import Block from './core/Block';

// const root = document.getElementById('root');

const navMenuTemplate = Handlebars.compile(template);
renderDom('root', navMenuTemplate({}));
