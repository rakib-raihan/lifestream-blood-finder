import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Requests from "../screens/Requests";
import CreateRequest from "../screens/CreateRequest";
import MyRequests from "../screens/MyRequests";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import AppIcon from "../components/AppIcon";

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
        name="MyRequests"
        component={MyRequests}
        options={{
          tabBarIcon: () => <AppIcon icon="format-list-bulleted" size={25} />,
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
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => <AppIcon icon="bell-outline" size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <AppIcon icon="account-outline" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default IndexNav;
