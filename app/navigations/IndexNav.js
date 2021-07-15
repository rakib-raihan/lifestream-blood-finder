import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Requests from "../screens/Requests";
import CreateRequest from "../screens/CreateRequest";
import Profile from "../screens/Profile";
import AppIcon from "../components/AppIcon";
import Donors from "../screens/Donors";

const Tab = createBottomTabNavigator();

const IndexNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tintColor: "#333",
        activeTintColor: "#ff0000",
      }}
    >
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: () => <AppIcon icon="rss" size={25} />,
        }}
      />
      <Tab.Screen
        name="Donors"
        component={Donors}
        options={{
          tabBarIcon: () => <AppIcon icon="account-search-outline" size={25} />,
        }}
      />
      <Tab.Screen
        name="CreateRequest"
        component={CreateRequest}
        options={{
          tabBarIcon: () => <AppIcon icon="plus-circle-outline" size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <AppIcon icon="cog-outline" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default IndexNav;
