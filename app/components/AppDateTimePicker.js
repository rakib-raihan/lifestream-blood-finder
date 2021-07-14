import React, { useState } from "react";
import { Text, View, Platform, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { appPicker } from "../config/Styles";

const AppDateTimePicker = ({
  value,
  mode = "date",
  title,
  icon,
  iconsize,
  onSelect = null,
}) => {
  const [date, setDate] = useState(value);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    onSelect(currentDate);
  };

  return (
    <>
      <Pressable onPress={() => setShow(true)}>
        <View style={appPicker.container}>
          <Text>{title}</Text>
          <View style={appPicker.view}>
            <Text style={appPicker.selectedItemSimple}>
              {date
                ? date.getDate() + "/" + date.getMonth() + "/" + date.getYear()
                : "Select Date/Time"}
            </Text>
            <MaterialCommunityIcons name={icon} size={iconsize} />
          </View>
        </View>
      </Pressable>
      {show && (
        <DateTimePicker
          minimumDate={new Date()}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default AppDateTimePicker;
