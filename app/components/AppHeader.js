import React from "react";
import { Text } from "react-native";
import { appHeader } from "../config/Styles";

const AppHeader = ({ title }) => {
  return <Text style={appHeader.text}>{title}</Text>;
};

export default AppHeader;
