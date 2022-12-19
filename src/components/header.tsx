import { View, StyleSheet, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/icons/logout.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 40,
    width: 100,
    backgroundColor: '#2F4F4F',
  },
  logo: {
    height: 30,
    width: 30,
  }
})
