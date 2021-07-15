import React from "react";
import { SafeAreaView } from "react-native";

const AppScreen = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 28,
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default AppScreen;
