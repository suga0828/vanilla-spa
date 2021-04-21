import { Component } from '../definitions/component.model';

import Home from '../pages/Home';
import About from '../pages/About';
import Post from '../pages/Post';

export type Routes = Record<string, Component>;

const ROUTES: Routes = {
  '/': Home,
  '/about': About,
  '/post/:id': Post,
};

export default ROUTES;
