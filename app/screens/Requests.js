import React, { useState, useEffect } from "react";
import { View, FlatList, Alert } from "react-native";
import { getAuthContext } from "../auth/Auth";
import AppPicker from "../components/AppPicker";
import AppRequestItem from "../components/AppRequestItem";
import AppScreen from "../components/AppScreen";
import LoadingScreen from "../components/LoadingScreen";
import { bloodGroups, divisions, districts } from "../config/Data";

const Requests = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [bloogGroup, setBloodGroup] = useState(bloodGroups[0]);
  const [division, setDivision] = useState(divisions[0]);
  const [districtList, setDistrictList] = useState(districts["1"]);
  const [district, setDistrict] = useState(districtList[0]);

  const { getRequests } = getAuthContext();

  const onSelectDivision = (division) => {
    setDivision(division);
    setDistrictList(districts[division.value]);
    setDistrict(districtList[0]);
  };
  const onSelectTemp = (value) => {};

  useEffect(() => {
    fetchData();
  }, [data.length]);

  const fetchData = async () => {
    setLoading(true);
    const { success, error, requests } = await getRequests();
    if (success) {
      setData(requests);
    } else {
      Alert.alert("Error!", error);
    }
    setLoading(false);
  };

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
              onSelectItem={onSelectTemp}
            />
          </View>
          <View>
            <AppPicker
              title="Division"
              icon="chevron-down"
              iconsize={16}
              dataset={divisions}
              selectedItem={division}
              onSelectItem={onSelectDivision}
            />
          </View>
          <View>
            <AppPicker
              dependency={districtList[0]}
              title="District"
              icon="chevron-down"
              iconsize={16}
              dataset={districtList}
              selectedItem={district}
              onSelectItem={onSelectTemp}
            />
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.created_at.nanoseconds.toString()}
          renderItem={({ item }) => <AppRequestItem data={item} />}
          showsVerticalScrollIndicator={false}
        />
        <LoadingScreen loading={loading} />
      </View>
    </AppScreen>
  );
};

export default Requests;
