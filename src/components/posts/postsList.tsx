import { FlatList } from 'react-native';
import { Post } from '../../types/post';
import { PostItem } from './postItem';

interface Props {
  posts: Post[],
  showModal: (value: number) => void,
}

export const PostsList: React.FC<Props> = ({ posts, showModal }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <PostItem
          userId={item.userId}
          title={item.title}
          body={item.body}
          showModal={showModal}
        />
      )}
    />
  );
};
