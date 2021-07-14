import React, { useState } from "react";
import { Alert, View } from "react-native";
import LoadingScreen from "../components/LoadingScreen";

import AppHeader from "../components/AppHeader";
import { container } from "../config/Styles";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import { bloodGroups, divisions, districts } from "../config/Data";
import AppDateTimePicker from "../components/AppDateTimePicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuthContext } from "../auth/Auth";

const CreateRequest = () => {
  const { requestBlood } = getAuthContext();

  const data = {
    bloog_group: "",
    created_at: "",
    date: "",
    district: "",
    division: "",
    donor_id: "",
    location: "",
    name: "",
    phone: "",
    resolved: false,
    user_id: "",
  };

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [bloogGroup, setBloodGroup] = useState(bloodGroups[0]);

  const [division, setDivision] = useState(divisions[0]);
  const [districtList, setDistrictList] = useState(districts["1"]);
  const [district, setDistrict] = useState(districtList[0]);
  const [date, setDate] = useState(new Date());

  const resetForm = () => {
    data.bloog_group = "";
    data.created_at = new Date();
    data.date = "";
    data.district = "";
    data.division = "";
    data.donor_id = "";
    data.location = "";
    data.name = "";
    data.phone = "";
    data.active = true;
    data.user_id = "";

    setName("");
    setPhone("");
    setName("");
    setLocation("");
    setBloodGroup(bloodGroups[0]);
    setDivision(divisions[0]);
    setDistrictList(districts["1"]);
    setDistrict(districtList[0]);
    setDate(new Date());
  };

  const onSelectDivision = (division) => {
    setDivision(division);
    setDistrictList(districts[division.value]);
    setDistrict(districtList[0]);
  };

  const onCreateRequest = async () => {
    setLoading(true);
    const user = await AsyncStorage.getItem("@user");
    const { uid } = JSON.parse(user);

    data.bloog_group = bloogGroup.label;
    data.created_at = new Date();
    data.date = date;
    data.district = district.label;
    data.division = division.label;
    data.donor_id = "";
    data.location = location;
    data.name = name;
    data.phone = phone;
    data.active = true;
    data.user_id = uid;

    const res = await requestBlood(data);
    if (!!res != false) {
      Alert.alert("Success", "Request posted successfully!");
      resetForm();
    } else {
      Alert.alert("Error", "Request not posted!");
    }
    setLoading(false);
  };

  return (
    <AppScreen>
      <View style={container.top}>
        <View style={container.view}>
          <AppHeader title="Request Blood" />
          <AppTextInput
            value={name}
            onChange={(_name) => setName(_name)}
            label="Name"
            placeholder="Enter the person name"
          />
          <AppTextInput
            value={phone}
            onChange={(_phone) => setPhone(_phone)}
            label="Phone"
            placeholder="Enter contact number"
          />
          <AppTextInput
            value={location}
            onChange={(_location) => setLocation(_location)}
            label="Location"
            placeholder="Enter s specific location"
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
          <AppPicker
            type="blood"
            title="Blood Group"
            icon="chevron-down"
            iconsize={16}
            dataset={bloodGroups}
            selectedItem={bloogGroup}
            onSelectItem={(item) => setBloodGroup(item)}
          />
          <AppDateTimePicker
            value={date}
            mode="date"
            title="Date"
            icon="calendar-month-outline"
            iconsize={16}
            onSelect={(_date) => setDate(_date)}
          />
        </View>
        <AppButton title="Post Blood Request" onClick={onCreateRequest} />
      </View>
      <LoadingScreen loading={loading} />
    </AppScreen>
  );
};

export default CreateRequest;
