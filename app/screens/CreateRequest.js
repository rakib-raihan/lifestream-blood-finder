import React, { useState } from "react";
import { View, Text } from "react-native";
import AppHeader from "../components/AppHeader";
import { container } from "../config/Styles";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";

const CreateRequest = () => {
  const bloodGroups = [
    { label: "A+", value: 1 },
    { label: "A-", value: 2 },
    { label: "B+", value: 3 },
    { label: "B-", value: 4 },
    { label: "AB+", value: 5 },
    { label: "AB-", value: 6 },
    { label: "O+", value: 7 },
    { label: "O-", value: 8 },
  ];

  const [bloogGroup, setBloodGroup] = useState(bloodGroups[0]);
  const onClick = () => {};

  return (
    <AppScreen>
      <View style={container.top}>
        <View style={container.view}>
          <AppHeader title="Request Blood" />
          <AppTextInput label="Name" placeholder="Enter the person name" />
          <AppTextInput label="Phone" placeholder="Enter contact number" />
          <AppTextInput
            label="Location"
            placeholder="Enter s specific location"
          />
          <AppPicker
            title="District"
            icon="chevron-down"
            iconsize={16}
            dataset={bloodGroups}
            selectedItem={bloogGroup}
            onSelectItem={(item) => setBloodGroup(item)}
          />
          <AppPicker
            title="Division"
            icon="chevron-down"
            iconsize={16}
            dataset={bloodGroups}
            selectedItem={bloogGroup}
            onSelectItem={(item) => setBloodGroup(item)}
          />
          <AppPicker
            type="blood"
            title="Blood Group"
            icon="chevron-down"
            iconsize={16}
            dataset={bloodGroups}
            selectedItem={bloogGroup}
            onSelectItem={(item) => setBloodGroup(item)}
          />
        </View>
        <AppButton title="Create Request" onClick={onClick} />
        <Text>or</Text>
        <AppButton title="Request for Me" onClick={onClick} />
      </View>
    </AppScreen>
  );
};

export default CreateRequest;
