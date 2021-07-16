import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";

import Register from "../screens/Register";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import IndexNav from "./IndexNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

class WelcomeNav extends Component {
  state = {
    user: false,
    loading: true,
  };

  async componentDidMount() {
    await SplashScreen.preventAutoHideAsync();
    const isUser = await AsyncStorage.getItem("@is_user");
    if (isUser === "1") {
      this.setState({
        user: true,
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
      });
    }
    await SplashScreen.hideAsync();
  }

  render() {
    const { loading, user } = this.state;

    return loading ? null : (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? "Home" : "Welcome"}>
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
            component={IndexNav}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default WelcomeNav;
