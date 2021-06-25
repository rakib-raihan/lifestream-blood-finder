import React, { useState } from "react";
import { View, FlatList, ScrollView } from "react-native";
import AppPicker from "../components/AppPicker";
import AppRequestItem from "../components/AppRequestItem";
import AppScreen from "../components/AppScreen";

const Requests = () => {
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

  const requests = [
    {
      id: 1,
      blood_group: "A+",
      name: "John Doe",
      contact: "01234567522",
      location: "Mirpur, Dhaka",
    },
    {
      id: 2,
      blood_group: "AB+",
      name: "Mr Hello World",
      contact: "0455456724",
      location: "Gulsan, Dhaka",
    },
    {
      id: 3,
      blood_group: "O+",
      name: "Alison Robbie",
      contact: "0123546577",
      location: "Satkhira, Khulna",
    },
    {
      id: 4,
      blood_group: "A+",
      name: "John Doe",
      contact: "01234567522",
      location: "Mirpur, Dhaka",
    },
    {
      id: 5,
      blood_group: "AB+",
      name: "Mr Hello World",
      contact: "0455456724",
      location: "Gulsan, Dhaka",
    },
    {
      id: 6,
      blood_group: "O+",
      name: "Alison Robbie",
      contact: "0123546577",
      location: "Satkhira, Khulna",
    },
    {
      id: 7,
      blood_group: "AB+",
      name: "Mr Hello World",
      contact: "0455456724",
      location: "Gulsan, Dhaka",
    },
    {
      id: 8,
      blood_group: "O+",
      name: "Alison Robbie",
      contact: "0123546577",
      location: "Satkhira, Khulna",
    },
  ];

  return (
    <AppScreen>
      <View style={{ padding: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
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
          <View>
            <AppPicker
              title="Division"
              icon="chevron-down"
              iconsize={16}
              dataset={bloodGroups}
              selectedItem={bloogGroup}
              onSelectItem={(item) => setBloodGroup(item)}
            />
          </View>
          <View>
            <AppPicker
              title="District"
              icon="chevron-down"
              iconsize={16}
              dataset={bloodGroups}
              selectedItem={bloogGroup}
              onSelectItem={(item) => setBloodGroup(item)}
            />
          </View>
        </View>
        <FlatList
          data={requests}
          keyExtractor={(request) => request.id.toString()}
          renderItem={({ request }) => <AppRequestItem data={request} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </AppScreen>
  );
};

export default Requests;
