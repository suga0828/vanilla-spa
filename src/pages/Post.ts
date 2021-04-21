import { Component } from '../definitions/component.model';

import { getPost } from '../services/post.service';

const Post: Component = {
  render: async () => {
    const post = await getPost();
    return /*html*/ `
      <article>
        <h1>${post.title}</h1>
        <p>
          ${post.description}
        </p>
      </article>
    `;
  },
  afterRender: async () => {},
};

export default Post;
