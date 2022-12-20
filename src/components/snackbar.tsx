import { Snackbar } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

interface Props {
  visible: boolean,
  reloadData: () => void,
  onDismissSnackBar: () => void
};

export const SnackBar: React.FC<Props> = ({
  reloadData,
  onDismissSnackBar,
  visible
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={reloadData}>
        <Image style={styles.image} source={require('../../assets/icons/refresh.png')} />
        <Text>Reload</Text>
      </TouchableOpacity>
      <Snackbar
        onDismiss={onDismissSnackBar}
        visible={visible}
        action={{
          label: 'Close'
        }}
      >
        An error occurred ..Try again
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  }
});
