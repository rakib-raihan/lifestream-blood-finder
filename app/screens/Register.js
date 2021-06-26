import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppHeader from "../components/AppHeader";
import AppSwitch from "../components/AppSwitch";
import AppPicker from "../components/AppPicker";
import { container } from "../config/Styles";

const Register = ({ navigation }) => {
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

  const onClick = () => {
    navigation.navigate("Login");
  };

  const onValueChange = () => {};

  return (
    <ScrollView>
      <View style={[container.center, { paddingBottom: 30, paddingTop: 30 }]}>
        <View style={container.view}>
          <AppHeader title="Create An Account" />
          <AppTextInput label="Name" placeholder="Enter your full name" />
          <AppPicker
            type="blood"
            title="Blood Group"
            icon="chevron-down"
            iconsize={16}
            dataset={bloodGroups}
            selectedItem={bloogGroup}
            onSelectItem={(item) => setBloodGroup(item)}
          />
          <AppSwitch
            title="I am a Donor"
            value={true}
            onValueChange={onValueChange}
          />
          <AppTextInput label="Phone" placeholder="Enter your phone number" />
          <AppTextInput label="Email" placeholder="Enter your email" />
          <AppTextInput
            password={true}
            label="Password"
            placeholder="Enter your password"
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
          <AppButton title="Register" onClick={onClick} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
