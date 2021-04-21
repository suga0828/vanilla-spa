import { Component } from '../definitions/component.model';

const Footer: Component = {
  render: async () => /*html*/ `
    <footer class="footer">This is my foot. There are many like it, but this one is mine.</footer>
  `,
  afterRender: async () => {},
};

export default Footer;
