import { View, StyleSheet, Text } from 'react-native';

interface Props {
  name: string,
}

export const CommentItem: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemDesc}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: "80%",
    backgroundColor: '#8A2BE2',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  itemDesc: {
    fontSize: 14,
    color: '#FFF8DC',
    textAlign: 'center'
  }
})
