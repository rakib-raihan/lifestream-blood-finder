import React from "react";
import { View, Image } from "react-native";
import { splashScreen, container } from "../config/Styles";

const SplashScreen = () => {
  return (
    <View style={container.center}>
      <Image
        style={splashScreen.logo}
        source={require("../assets/images/logo.jpg")}
      />
    </View>
  );
};

export default SplashScreen;
