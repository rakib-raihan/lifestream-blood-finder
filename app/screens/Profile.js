import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getAuthContext } from "../auth/Auth";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import { container } from "../config/Styles";
import LoadingScreen from "../components/LoadingScreen";

const Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { logout } = getAuthContext();

  useEffect(() => {
    (async function () {
      // Async storage sync data
    })();
  });

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
        <Image
          source={require("../assets/images/profile.png")}
          style={profile.dp}
        />
        <View>
          <View>
            <Text>Name:</Text>
            <Text>John Doe</Text>
          </View>
          <View>
            <Text>Address:</Text>
            <Text>Dhaka, Bangladesh</Text>
          </View>
          <View>
            <Text>Phone:</Text>
            <Text>12345-7895625</Text>
          </View>
          <View>
            <Text>Email:</Text>
            <Text>12345-7895625</Text>
          </View>
          <View>
            <Text>Donor?</Text>
            <Text>Yes</Text>
          </View>
        </View>
        <AppButton title="Logout" onClick={onLogout} />
      </View>
      <LoadingScreen loading={loading} />
    </AppScreen>
  );
};

const profile = StyleSheet.create({
  dp: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
});

export default Profile;
