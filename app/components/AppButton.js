import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { appButton } from "../config/Styles";

const AppButton = ({ title, onClick = null, type = "primary" }) => {
  return (
    <TouchableOpacity
      style={
        type == "primary"
          ? appButton.primaryContainer
          : [appButton.secContainer, { marginBottom: 10 }]
      }
      onPress={onClick}
      activeOpacity={0.5}
    >
      <Text
        style={type == "primary" ? appButton.primaryText : appButton.secText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
