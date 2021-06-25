import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { appTextInput } from "../config/Styles";

const AppTextInput = ({ label, placeholder, onChange, password = false }) => {
  const [focus, setFocus] = useState(false);

  return (
    <View>
      <Text style={appTextInput.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChange={onChange}
        style={focus ? appTextInput.active : appTextInput.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={password ? true : false}
      />
    </View>
  );
};

export default AppTextInput;
