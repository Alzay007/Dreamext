import React, { Dispatch, SetStateAction } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type Props = {
  placeholder: string,
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  secureText: boolean,
};

export const CustomInput: React.FC<Props> = ({
  placeholder,
  value,
  setValue,
  secureText,
}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        value={value}
        style={styles.TextInput}
        placeholder={placeholder}
        placeholderTextColor="#003f5c"
        onChangeText={setValue}
        secureTextEntry={secureText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
});
