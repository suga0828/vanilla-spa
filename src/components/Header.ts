import { Component } from '../definitions/component.model';

const Header: Component = {
  render: async () => /*html*/ `
    <header>
      <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <a class="flex-shrink-0" href="vanilla-spa/#/">
                <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
              </a>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a href="vanilla-spa/#/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="vanilla-spa/#/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="vanilla-spa/#/404-route" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">404</a>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="vanilla-spa/#/" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="vanilla-spa/#/about" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="vanilla-spa/#/other-route" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">404</a>
          </div>
        </div>
      </nav>
    </header>
  `,
  afterRender: async () => {},
};

export default Header;
