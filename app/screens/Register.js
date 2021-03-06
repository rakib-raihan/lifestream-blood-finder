import React, { useState } from "react";
import { View, ScrollView, Text, Alert } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppHeader from "../components/AppHeader";
import AppSwitch from "../components/AppSwitch";
import AppPicker from "../components/AppPicker";
import LoadingScreen from "../components/LoadingScreen";

import { container } from "../config/Styles";
import { getAuthContext } from "../auth/Auth";
import { bloodGroups, divisions, districts } from "../config/Data";
import AppScreen from "../components/AppScreen";

const Register = ({ navigation }) => {
  const userInfo = {
    name: "",
    bloodGroup: "",
    isDonor: true,
    phone: "",
    email: "",
    password: "",
    district: "",
    division: "",
  };

  const { register } = getAuthContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [bloogGroup, setBloodGroup] = useState(bloodGroups[0]);
  const [isDonor, setIsDonor] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [division, setDivision] = useState(divisions[0]);
  const [districtList, setDistrictList] = useState(districts["1"]);
  const [district, setDistrict] = useState(districtList[0]);

  const onRegister = async () => {
    setLoading(true);
    userInfo.name = name;
    userInfo.bloodGroup = bloogGroup.label;
    userInfo.isDonor = isDonor;
    userInfo.phone = phone;
    userInfo.email = email;
    userInfo.password = password;
    userInfo.district = district.label;
    userInfo.division = division.label;

    if (valid()) {
      const { success, error } = await register(userInfo);
      if (success) {
        Alert.alert(
          "Registration Successfull!",
          "Please Login using Email & Password."
        );
        navigation.navigate("Login");
      } else {
        setError(error);
      }
    }
    setLoading(false);
  };

  const valid = () => {
    if (
      userInfo.name === "" ||
      userInfo.bloodGroup === "" ||
      userInfo.isDonor === "" ||
      userInfo.phone === "" ||
      userInfo.email === "" ||
      userInfo.password === "" ||
      userInfo.district === "" ||
      userInfo.division === ""
    ) {
      setError("Please fill all information");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onSelectDivision = (division) => {
    setDivision(division);
    setDistrictList(districts[division.value]);
    setDistrict(districtList[0]);
  };

  return (
    <AppScreen>
      <ScrollView>
        <View style={[container.center, { paddingBottom: 30 }]}>
          <View style={container.view}>
            <AppHeader title="Create An Account" />
            <AppTextInput
              value={name}
              onChange={(_name) => setName(_name)}
              label="Name"
              placeholder="Enter your full name"
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
            <AppSwitch
              title="I am a Donor"
              value={true}
              onValueChange={(isDonor) => setIsDonor(isDonor)}
            />
            <AppTextInput
              value={phone}
              onChange={(_phone) => setPhone(_phone)}
              label="Phone"
              placeholder="Enter your phone number"
            />
            <AppTextInput
              value={email}
              onChange={(_email) => setEmail(_email)}
              label="Email"
              placeholder="Enter your email"
            />
            <AppTextInput
              value={password}
              onChange={(_password) => setPassword(_password)}
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
              dependency={districtList[0]}
              title="District"
              icon="chevron-down"
              iconsize={16}
              dataset={districtList}
              selectedItem={district}
              onSelectItem={(item) => setDistrict(item)}
            />
            {!!error && (
              <Text style={{ color: "#ff0000", marginBottom: 15 }}>
                {error}
              </Text>
            )}
            <AppButton title="Register" onClick={onRegister} />
          </View>
          <LoadingScreen loading={loading} />
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default Register;
