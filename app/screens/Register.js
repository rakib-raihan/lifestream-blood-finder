import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppHeader from "../components/AppHeader";
import AppSwitch from "../components/AppSwitch";
import AppPicker from "../components/AppPicker";

import { container } from "../config/Styles";
import { getAuthContext } from "../auth/Auth";
import { bloodGroups, divisions, districts } from "../config/Data";

const Register = ({ navigation }) => {
  const { register } = getAuthContext();
  const [bloogGroup, setBloodGroup] = useState(bloodGroups[0]);
  const [division, setDivision] = useState(divisions[0]);
  const [districtList, setDistrictList] = useState(districts["1"]);
  const [district, setDistrict] = useState(districtList[0]);

  const onRegister = async () => {
    await register("test2@mail.com", "123456");
  };

  const onSelectDivision = (division) => {
    setDivision(division);
    setDistrictList(districts[division.value]);
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
            title="Division"
            icon="chevron-down"
            iconsize={16}
            dataset={divisions}
            selectedItem={division}
            onSelectItem={(item) => onSelectDivision(item)}
          />
          <AppPicker
            title="District"
            icon="chevron-down"
            iconsize={16}
            dataset={districtList}
            selectedItem={district}
            onSelectItem={(item) => setDistrict(item)}
          />
          <AppButton title="Register" onClick={onRegister} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
