import React, { useState } from "react";
import { View, Text } from "react-native";
import LoadingScreen from "../components/LoadingScreen";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppHeader from "../components/AppHeader";
import { container } from "../config/Styles";

import { getAuthContext } from "../auth/Auth";
import AppScreen from "../components/AppScreen";

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = getAuthContext();

  const userData = {
    email: "",
    password: "",
  };

  const onLogin = async () => {
    setError("");
    setLoading(true);
    const { success, error } = await login(userData);
    if (success) {
      navigation.navigate("Home");
    } else {
      setError(error);
    }
    setLoading(false);
  };

  const onEmailChange = (email) => {
    userData.email = email;
  };

  const onPasswordChange = (password) => {
    userData.password = password;
  };

  return (
    <AppScreen>
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
        <LoadingScreen loading={loading} />
      </View>
    </AppScreen>
  );
};

export default Login;
