import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export const HeaderBar = () => {
  const navigation = useNavigation<any>();

  const onPressed = () => {
    navigation.navigate('LoginScreen')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress={onPressed}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../assets/icons/logout.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontWeigth: 'bold',
    fontSize: 22,
    marginRight: 95,
    marginLeft: 110,
  },
});
