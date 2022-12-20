import { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { CustomButton } from '../components/customButton';
import { CustomInput } from '../components/customInput';
import { User } from '../types/user';
import { usersData } from '../api/users';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation<any>();

  const [users, setUsers] = useState<User[]>([])
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setUsers(usersData)
  }, [])


  const onSignInPressed = () => {
    if (users.find(user => user.login === email && user.password === password)) {
      navigation.navigate('HomeScreen')
      setPassword('')
    } else {
      setPassword('')
      setError(true)

      window.setTimeout(() => setError(false), 2500)
    }
  }

  const notEmpyField = email.length > 0 && password.length > 0;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/DC.png')} />

      <CustomInput
        placeholder='Email'
        value={email}
        setValue={setEmail}
        secureText={false}
      />

      {error && (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>
            Please enter correct email/password
          </Text>
        </View>
      )}

      <CustomInput
        placeholder='Password'
        value={password}
        setValue={setPassword}
        secureText={true}
      />

      {notEmpyField &&
        (
          <CustomButton text={'Login'} handleNavigate={onSignInPressed} />
        )}
    </View>
  );

};
export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
  },
  image: {
    height: 220,
    width: 220,
    marginBottom: 50,
  },
  errorBox: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    color: '#D8000C',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
