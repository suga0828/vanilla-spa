import { Component } from '../definitions/component.model';

const ErrorPage: Component = {
  render: async () => /*html*/ `<section><h1> 404 </h1></section>`,

  afterRender: async () => {},
};

export default ErrorPage;
