import React, { useState } from "react";
import { View, Text, Pressable, Modal, Button, FlatList } from "react-native";
import { appPicker } from "../config/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppPickerItems from "./AppPickerItems";

const AppPicker = ({
  type = "other",
  title,
  icon,
  iconsize,
  dataset,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={appPicker.container}>
          <Text>{title}</Text>
          <View style={appPicker.view}>
            <Text
              style={
                type == "blood"
                  ? appPicker.selectedItem
                  : appPicker.selectedItemSimple
              }
            >
              {selectedItem ? selectedItem.label : "A+"}
            </Text>
            <MaterialCommunityIcons name={icon} size={iconsize} />
          </View>
        </View>
        <Modal visible={modalVisible} animationType="slide">
          <FlatList
            data={dataset}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItems
                type={type}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Modal>
      </Pressable>
    </>
  );
};

export default AppPicker;
