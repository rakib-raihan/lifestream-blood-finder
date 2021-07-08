import React, { useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppHeader from "../components/AppHeader";
import { container } from "../config/Styles";

import { getAuthContext } from "../auth/Auth";

const Login = ({ navigation }) => {
  const [error, setError] = useState("");
  const { login } = getAuthContext();
  const userData = {
    email: "",
    password: "",
  };

  const onLogin = async () => {
    setError("");
    await login(userData);
    const isUser = await AsyncStorage.getItem("@isUser");
    if (isUser) {
      navigation.navigate("Home");
    } else {
      setError("Invalid Email or Password");
    }
  };

  const onEmailChange = (email) => {
    userData.email = email;
  };

  const onPasswordChange = (password) => {
    userData.password = password;
  };

  return (
    <View style={container.center}>
      <View style={container.view}>
        <AppHeader title="Welcome Back!" />
        <AppTextInput
          label="Email / Username"
          placeholder="Enter your email or username"
          onChange={onEmailChange}
        />
        <AppTextInput
          password={true}
          label="Password"
          placeholder="Enter your password"
          onChange={onPasswordChange}
        />
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          Forgot Password?
        </Text>
        {!!error && (
          <Text style={{ color: "#ff0000", marginBottom: 15 }}>{error}</Text>
        )}
        <AppButton title="Login" onClick={onLogin} />
      </View>
    </View>
  );
};

export default Login;
