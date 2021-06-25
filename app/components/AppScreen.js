import React from "react";
import { SafeAreaView } from "react-native";
import { container } from "../config/Styles";

const AppScreen = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 22 }}>{children}</SafeAreaView>
  );
};

export default AppScreen;
