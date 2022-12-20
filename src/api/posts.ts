import { Post } from '../types/post';
import { client } from '../utils/fetchClient';

export const getPosts = () => {
  return client.get<Post[]>(`/posts`);
};
