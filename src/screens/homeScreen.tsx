import { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { getPosts } from '../api/posts';
import { Loader } from '../components/loader';
import ModalWindow from '../components/modalWindow';
import { PostsList } from '../components/posts/postsList';
import { SnackBar } from '../components/snackbar';
import { Post } from '../types/post';

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [visibleSnackBar, setVisibleSnackBar] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<number>(0);

  const showModal = (userId: number) => {
    setSelectedPost(userId)
    console.log(selectedPost)
  }

  const showSnackBar = () => {
    setVisibleSnackBar(true)
  }

  const hideModal = () => setSelectedPost(0);

  const reloadData = async () => {
    setError(false)
    setIsLoading(true)

    try {
      const receivedPosts = await getPosts();

      setPosts(receivedPosts);
      setIsLoading(false)
    } catch (error) {
      setError(true);
      setVisibleSnackBar(true)
      setIsLoading(false)
    }
  };

  const dismissSnackBar = () => setVisibleSnackBar(false);

  useEffect(() => {
    const getPostsFromServer = async () => {
      try {
        const receivedPosts = await getPosts();

        setPosts(receivedPosts);
        setIsLoading(false)
      } catch (error) {
        setError(true);
        setVisibleSnackBar(true)
        setIsLoading(false)
      }
    };

    getPostsFromServer();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}

      {error && (
        <SnackBar
          reloadData={reloadData}
          onDismissSnackBar={dismissSnackBar}
          visible={visibleSnackBar}
        />
      )}

      {selectedPost !== 0 && (
        <ModalWindow
          selectedPost={selectedPost}
          hideModal={hideModal}
          showSnackBar={showSnackBar}
        />
      )}

      <PostsList posts={posts} showModal={showModal} />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
    padding: 20,
  },
})