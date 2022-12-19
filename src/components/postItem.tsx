import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  title: string,
  body: string,
  showModal: () => void;
}

export const PostItem: React.FC<Props> = ({
  title,
  body,
  showModal,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDesc}>{body}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={showModal}
      >
        <Text>Comments</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "80%",
    backgroundColor: '#8A2BE2',
    padding: 10,
    borderRadius: 20,
    marginBottom: 30,
  },
  itemTitle: {
    fontSize: 18,
    color: '#F0FFFF',
    textAlign: 'center',
    marginBottom: 10
  },
  itemDesc: {
    fontSize: 14,
    color: '#FFF8DC',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 20,
    backgroundColor: 'orange',
    alignItems: "center",
    borderRadius: 5,
  }
})