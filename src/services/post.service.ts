import { Post } from '../definitions/post.model';

export const getPosts = async (): Promise<Post[]> => {
  return [{ id: '123', title: 'Post Title', description: 'description' }];
};

export const getPost = async (): Promise<Post> => {
  return { id: '123', title: 'Post Title', description: 'description' };
};
