import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { appSwitch } from "../config/Styles";
import Colors from "../config/Colors";

const AppSwitch = ({ title, value, onValueChange }) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={appSwitch.container}>
      <Text>{title}</Text>
      <Switch
        style={appSwitch.switch}
        trackColor={{ false: Colors.lightOrange, true: Colors.lightOrange }}
        thumbColor={isEnabled ? Colors.red : Colors.darkGray}
        ios_backgroundColor={Colors.darkGray}
        onValueChange={toggleSwitch}
        onChange={onValueChange(isEnabled)}
        value={isEnabled}
      />
    </View>
  );
};

export default AppSwitch;
