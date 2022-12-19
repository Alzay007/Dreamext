import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  text: string,
  handleNavigate: () => void,
};

export const CustomButton: React.FC<Props> = ({ handleNavigate, text }) => {
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.loginBtn}>
      <Text style={styles.loginText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn:
  {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
  }
});
