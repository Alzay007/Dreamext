import { FlatList } from 'react-native';
import { Post } from '../types/post';
import { PostItem } from './postItem';

interface Props {
  posts: Post[],
  showModal: () => void,
}

export const PostsList: React.FC<Props> = ({ posts, showModal }) => {

  return (
    <FlatList
      data={posts}
      initialNumToRender={40}
      renderItem={({ item }) => (
        <PostItem
          title={item.title}
          body={item.body}
          showModal={showModal}
        />
      )}
    />
  );
};
