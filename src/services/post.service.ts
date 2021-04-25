import { Post } from '../definitions/post.model';

const SECRET = '60859ba3d14a87001757806e';

export const getPosts = async (page = 1, limit = 12): Promise<Post[]> => {
  const options: RequestInit = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

  try {
    const response = await fetch(`https://${SECRET}.mockapi.io/posts?page=${page}&limit=${limit}`, options);

    return await response.json();
  } catch (err) {
    console.log('error getting posts', err);
  }
};

export const getPost = async (id: number): Promise<Post> => {
  const options: RequestInit = { method: 'GET', headers: { 'Content-Type': 'application/json' } };

  try {
    const response = await fetch(`https://${SECRET}.mockapi.io/posts/${id}`, options);

    return await response.json();
  } catch (err) {
    console.log('error getting post', err);
  }
};
