import { useEffect, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { CommentsList } from "./comments/commentsList";
import { Comment } from "../types/comment";
import { getPostComments } from "../api/comments";
import { Loader } from "./loader";

interface Props {
  selectedPost: number,
  hideModal: () => void,
  showSnackBar: () => void,
}

const ModalWindow: React.FC<Props> = ({
  hideModal,
  selectedPost,
  showSnackBar,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const getCommentsFromServer = async () => {
      try {
        const receivedComments = await getPostComments(selectedPost);

        setComments(receivedComments);
        setIsLoading(false)
      } catch (error) {
        hideModal()
        showSnackBar()
      }
    };

    getCommentsFromServer();
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => hideModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {isLoading && <Loader />}
            <CommentsList comments={comments} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
  },
  modalView: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default ModalWindow;