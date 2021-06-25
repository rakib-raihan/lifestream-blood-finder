import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({ icon, size = 16 }) => {
  return (
    <View>
      <MaterialCommunityIcons name={icon} size={size} />
    </View>
  );
};

export default AppIcon;
