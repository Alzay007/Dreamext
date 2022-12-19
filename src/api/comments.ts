import { client } from '../utils/fetchClient';
import { Comment } from '../types/comment';

export const getPostComments = (postId: number) => {
  return client.get<Comment[]>(`/comments?postId=${postId}`);
};
