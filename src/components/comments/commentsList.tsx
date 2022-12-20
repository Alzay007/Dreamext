import { FlatList } from 'react-native';
import { Comment } from '../../types/comment';
import { CommentItem } from './commentItem';

interface Props {
  comments: Comment[],
}

export const CommentsList: React.FC<Props> = ({ comments }) => {

  return (
    <FlatList
      data={comments}
      initialNumToRender={40}
      renderItem={({ item }) => (
        <CommentItem
          name={item.name}
          email={item.email}
          body={item.body}
        />
      )}
    />
  );
};