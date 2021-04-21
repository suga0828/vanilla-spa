import ROUTES from './router/routes';

import Router from './router';

import Header from './components/Header';
import Footer from './components/Footer';

import ErrorPage from './pages/ErrorPage';

(async () => {
  const app = document.getElementById('app');

  app.innerHTML = /*html*/ `
    ${await Header.render()}
    <div class="outlet"></div>
    ${await Footer.render()}
  `;

  Router(app.getElementsByClassName('outlet')[0], ROUTES, ErrorPage);
})();
