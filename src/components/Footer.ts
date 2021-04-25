import { Component } from '../definitions/component.model';

const Footer: Component = {
  render: async () => /*html*/ `
    <footer class="bg-gray-800 text-gray-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16">
          This is my footer. There are many like it, but this one is mine.
        </div>
      </div>
    </footer>
  `,
  afterRender: async () => {},
};

export default Footer;
