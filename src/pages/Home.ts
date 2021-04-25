import { Component } from '../definitions/component.model';
import { Post } from '../definitions/post.model';

import { getPosts } from '../services/post.service';

const Home: Component = {
  render: async () => {
    const posts = await getPosts();
    return /*html*/ `
      <section>
        <h2 class="py-12 px-4 text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl text-indigo-600">
          Home
        </h2>
        <ul class="py-12 px-4 grid grid-cols-4 gap-12">
          ${posts
            .map(
              (post: Post) => /*html*/ `
              <li>
                <a class="block bg-white shadow p-4" href="#/post/${post.id}">
                  <span class="block mb-4 text-lg leading-6 font-medium text-gray-900">${post.title}</span>
                  <span class="text-justify text-base text-gray-500">${post.description}</span>
                </a>
              </li>
            `
            )
            .join('\n ')}
        </ul>
      </section>
    `;
  },
  afterRender: async () => {},
};

export default Home;
