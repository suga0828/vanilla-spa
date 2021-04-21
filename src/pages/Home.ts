import { Component } from '../definitions/component.model';

import { getPosts } from '../services/post.service';

const Home: Component = {
  render: async () => {
    const posts = await getPosts();
    return /*html*/ `
      <main>
        <h1>Home</h1>
        <ul>
          ${posts.map((post) => /*html*/ `<li><a href="#/post/${post.id}">${post.title}</a></li>`).join('\n ')}
        </ul>
      </main>
    `;
  },
  afterRender: async () => {},
};

export default Home;
