import { Component } from '../definitions/component.model';

import { getPost } from '../services/post.service';

const Post: Component = {
  render: async () => {
    const post = await getPost();
    return /*html*/ `
      <section class="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <h2 class="p-4 text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl text-indigo-600">
          ${post.title}
        </h2>
        <p class="m-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">${post.description}</p>
      </section>
    `;
  },
  afterRender: async () => {},
};

export default Post;
