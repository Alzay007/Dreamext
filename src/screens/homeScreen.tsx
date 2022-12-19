import { View, StyleSheet } from "react-native";
import { Header } from '../components/header';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
})