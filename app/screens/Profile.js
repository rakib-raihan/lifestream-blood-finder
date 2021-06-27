import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";
import { container } from "../config/Styles";

const Profile = () => {
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
      </View>
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
