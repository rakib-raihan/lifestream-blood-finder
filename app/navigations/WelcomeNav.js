import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "../screens/Register";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import IndexNav from "./IndexNav";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();

class WelcomeNav extends Component {
  state = {
    user: false,
    loading: true,
  };

  async componentDidMount() {
    setTimeout(this.initData, 1500);
  }

  initData = async () => {
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
  };

  render() {
    const { loading, user } = this.state;

    return loading ? (
      <SplashScreen />
    ) : (
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
