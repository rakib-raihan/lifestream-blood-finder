import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { appPicker } from "../config/Styles";

const AppPickerItems = ({ type, label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={type == "blood" ? appPicker.itemView : appPicker.itemViewSimple}
      >
        <Text
          style={
            type == "blood" ? appPicker.itemText : appPicker.itemTextSimple
          }
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppPickerItems;
