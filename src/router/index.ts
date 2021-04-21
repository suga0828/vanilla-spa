import { Component } from '../definitions/component.model';

import { Routes } from './routes';

import * as Utils from '../utils';

const renderPage = async (url: string, routerOutlet: any, routes: Routes, errorComponent: any) => {
  const request = Utils.parseRequestURL(url);

  const page = routes[`/${request.resource}${request.id}${request.verb}`] || errorComponent;

  routerOutlet.innerHTML = await page.render();
  page.afterRender();
};

export default (routerOutlet: any, routes: Routes, errorComponent: Component = null) => {
  window.addEventListener('hashchange', async () => {
    await renderPage(location.hash.slice(1).toLowerCase(), routerOutlet, routes, errorComponent);
  });

  window.addEventListener('load', async () => {
    await renderPage(location.hash.slice(1).toLowerCase(), routerOutlet, routes, errorComponent);
  });
};
