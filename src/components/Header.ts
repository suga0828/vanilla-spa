import { Component } from '../definitions/component.model';

const Header: Component = {
  render: async () => /*html*/ `
    <header>
      <nav>
        <a href="/#/">Home</a>
        <a href="/#/about">About</a>
        <a href="/#/other-route">404</a>
      </nav>
    </header>
  `,
  afterRender: async () => {},
};

export default Header;
