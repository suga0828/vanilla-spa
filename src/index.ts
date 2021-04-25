import ROUTES from './router/routes';

import Router from './router';

import Header from './components/Header';
import Footer from './components/Footer';

import ErrorPage from './pages/ErrorPage';

(async () => {
  const app = document.getElementById('app');

  app.innerHTML = /*html*/ `
    <main class="min-h-screen flex flex-col">
      ${await Header.render()}
      <div class="outlet flex-grow bg-gray-50"></div>
      ${await Footer.render()}
    </main>
  `;

  Router(app.getElementsByClassName('outlet')[0], ROUTES, ErrorPage);
})();
