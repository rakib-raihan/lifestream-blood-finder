import React from "react";
import { View, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppHeader from "../components/AppHeader";
import { container } from "../config/Styles";

const Login = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={container.center}>
      <View style={container.view}>
        <AppHeader title="Welcome Back!" />
        <AppTextInput
          label="Email / Username"
          placeholder="Enter your email or username"
        />
        <AppTextInput
          password={true}
          label="Password"
          placeholder="Enter your password"
        />
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          Forgot Password?
        </Text>
        <AppButton title="Login" onClick={handleClick} />
      </View>
    </View>
  );
};

export default Login;
