import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";
import { welcomeScreen } from "../config/Styles";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={welcomeScreen.background}
    >
      <View style={welcomeScreen.logoContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={welcomeScreen.logo}
        />
      </View>

      <View style={welcomeScreen.buttonContainer}>
        <AppButton
          title="Login"
          type="primary"
          onClick={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Create an Account"
          type="primary"
          onClick={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default Welcome;
