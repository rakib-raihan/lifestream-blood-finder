import React from "react";
import Register from "./app/screens/Register";
import Login from "./app/screens/Login";
import SplashScreen from "./app/screens/SplashScreen";
import Requests from "./app/screens/Requests";
import CreateRequest from "./app/screens/CreateRequest";
import MyRequests from "./app/screens/MyRequests";
import Profile from "./app/screens/Profile";
import Home from "./app/screens/Home";
import AppScreen from "./app/components/AppScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppIcon from "./app/components/AppIcon";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <AppIcon icon="home-outline" size={25} />,
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: () => <AppIcon icon="alert-outline" size={25} />,
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
        name="MyRequests"
        component={MyRequests}
        options={{
          tabBarIcon: () => <AppIcon icon="format-list-bulleted" size={25} />,
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

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    //<Register />
    //<Login />
  );
}
