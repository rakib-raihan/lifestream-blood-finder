import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getAuthContext } from "../auth/Auth";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import { container } from "../config/Styles";
import LoadingScreen from "../components/LoadingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppHeader from "../components/AppHeader";

const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const { logout } = getAuthContext();

  useEffect(() => {
    (async function () {
      const { bloodGroup, district, division, isDonor, name, phone } =
        JSON.parse(await AsyncStorage.getItem("@user"));
      const data = {
        bloodGroup: bloodGroup,
        district: district,
        division: division,
        donor: isDonor,
        name: name,
        phone: phone,
      };
      setUser(data);
    })();
  }, [user.name]);

  const onLogout = async () => {
    setLoading(true);
    const { success, error } = await logout();
    if (success) {
      navigation.navigate("Welcome");
    }
    setLoading(false);
  };

  return (
    <AppScreen>
      <View style={container.top}>
        <View style={container.view}>
          <AppHeader title="My Profile" />
          <View style={profile.dpContainer}>
            <Image
              source={require("../assets/images/profile.png")}
              style={profile.dp}
            />
          </View>
        </View>
        <View style={container.view}>
          <View style={profile.row}>
            <View>
              <Text>Name:</Text>
            </View>
            <View>
              <Text>{user.name}</Text>
            </View>
          </View>
          <View style={profile.row}>
            <View>
              <Text>Blood Group:</Text>
            </View>
            <View>
              <Text>{user.bloodGroup}</Text>
            </View>
          </View>
          <View style={profile.row}>
            <View>
              <Text>Donor:</Text>
            </View>
            <View>
              <Text>{user.donor ? "Yes" : "No"}</Text>
            </View>
          </View>
          <View style={profile.row}>
            <View>
              <Text>Phone:</Text>
            </View>
            <View>
              <Text>{user.phone}</Text>
            </View>
          </View>
          <View style={[profile.row, profile.rowLast]}>
            <View>
              <Text>Address:</Text>
            </View>
            <View>
              <Text>
                {user.district}, {user.division}
              </Text>
            </View>
          </View>
          <AppButton title="Logout" onClick={onLogout} />
        </View>
      </View>
      <LoadingScreen loading={loading} />
    </AppScreen>
  );
};

const profile = StyleSheet.create({
  dpContainer: {
    alignItems: "center",
  },
  dp: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginBottom: 30,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 10,
    paddingTop: 10,
  },
  rowLast: {
    borderBottomWidth: 0,
    marginBottom: 30,
  },
});

export default Profile;
