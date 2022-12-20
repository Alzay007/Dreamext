import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import LoginScreen from './src/screens/loginScreen';
import HomeScreen from './src/screens/homeScreen';
import { HeaderBar } from './src/components/headerBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login Screen',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerBackVisible: false,
            headerTitle: (props: any) => <HeaderBar {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
});
