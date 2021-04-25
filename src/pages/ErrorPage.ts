import { Component } from '../definitions/component.model';

const ErrorPage: Component = {
  render: async () => /*html*/ `
  <section class="min-h-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">404 | There was an error</span>
      <span class="block text-indigo-600">We can't found this page.</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a href="/#/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Home
        </a>
      </div>
    </div>
  </section>  
  `,
  afterRender: async () => {},
};

export default ErrorPage;
