import { useEffect, useState } from "react";
import { StyleSheet, View, Modal, Text, TouchableOpacity } from "react-native";
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
        onRequestClose={hideModal}
        onDismiss={hideModal}
      >
        <View style={styles.modalView}>
          {isLoading && <Loader />}
          {!isLoading && (
            <TouchableOpacity
              style={styles.button}
              onPress={hideModal}
            >
              <Text style={{ color: 'black' }}>X</Text>
            </TouchableOpacity>
          )}
          <CommentsList comments={comments} />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    position: 'relative',
  },
  modalView: {
    position: 'absolute',
    bottom: 180,
    left: 37,
    justifyContent: "center",
    height: 360,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
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
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    top: 10,
    right: 10,
    borderWidth: 1,
    borderRadius: 50,
  }
});

export default ModalWindow;