import React, { createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as firebase from "firebase";
import { firebaseConfig } from "../config/Firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AuthContext = createContext();
export const getAuthContext = () => useContext(AuthContext);

const login = async ({ email, password }) => {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userInfo) => {
        const { user } = userInfo;
        AsyncStorage.setItem("@user", JSON.stringify(user));
        AsyncStorage.setItem("@is_user", "1");
      });
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    return await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

const register = async (email, password) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        firebase.firestore().collection("users").doc(userData.user.uid).set({
          id: userData.user.uid,
          fullname: "Hello",
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const Auth = ({ children }) => {
  return (
    <AuthContext.Provider value={{ login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
