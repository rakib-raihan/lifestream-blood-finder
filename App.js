import React from "react";
import Register from "./app/screens/Register";
import Login from "./app/screens/Login";
import Requests from "./app/screens/Requests";
import CreateRequest from "./app/screens/CreateRequest";
import MyRequests from "./app/screens/MyRequests";
import Profile from "./app/screens/Profile";
import Welcome from "./app/screens/Welcome";
import Notifications from "./app/screens/Notifications";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AppIcon from "./app/components/AppIcon";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
