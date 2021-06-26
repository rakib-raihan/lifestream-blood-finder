import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";
import { welcomeScreen } from "../config/Styles";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={welcomeScreen.background}
    >
      <View style={welcomeScreen.logoContainer}>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={welcomeScreen.logo}
        />
        <Text style={welcomeScreen.logoText}>Donate Blood</Text>
        <Text style={welcomeScreen.logoText}>Save Life!</Text>
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
