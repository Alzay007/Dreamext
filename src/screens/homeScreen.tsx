import { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { getPosts } from '../api/posts';
import { Loader } from '../components/loader';
import ModalWindow from '../components/modalWindow';
import { PostsList } from '../components/postsList';
import { Post } from '../types/post';

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  useEffect(() => {
    const getPostsFromServer = async () => {
      try {
        const receivedPosts = await getPosts();

        setPosts(receivedPosts);
        setIsLoading(false)
      } catch (error) {
        setError(true);
      }
    };

    getPostsFromServer();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}
      <PostsList posts={posts} showModal={showModal} />
      {visibleModal && <ModalWindow hideModal={hideModal} visible={visibleModal} />}
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
    padding: 20,
  },
})