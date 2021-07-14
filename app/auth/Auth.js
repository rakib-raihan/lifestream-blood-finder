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

const requestBlood = async ({
  bloog_group,
  created_at,
  date,
  district,
  division,
  donor_id,
  location,
  name,
  phone,
  active,
  user_id,
}) => {
  try {
    const res = await firebase.firestore().collection("requests").add({
      bloog_group,
      created_at,
      date,
      district,
      division,
      donor_id,
      location,
      name,
      phone,
      active,
      user_id,
    });
    return res;
  } catch (error) {
    return false;
  }
};

const login = async ({ email, password }) => {
  let userData;
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userInfo) => {
        userData = userInfo.user;
      });
    //console.log("userData", userData);
    await firebase
      .firestore()
      .collection("users")
      .doc(userData.uid)
      .get()
      .then((res) => {
        const user = res.data();
        user.uid = userData.uid;
        AsyncStorage.setItem("@user", JSON.stringify(user));
        AsyncStorage.setItem("@is_user", "1");
      });

    return { success: true, error: null };
  } catch (error) {
    AsyncStorage.setItem("@user", "");
    AsyncStorage.setItem("@is_user", "0");
    return { success: false, error: error.message };
  }
};

const logout = async () => {
  try {
    AsyncStorage.setItem("@user", "");
    AsyncStorage.setItem("@is_user", "0");
    await firebase
      .auth()
      .signOut()
      .then(() => {
        AsyncStorage.setItem("@user", "");
        AsyncStorage.setItem("@is_user", "0");
      });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const register = async ({
  name,
  bloodGroup,
  isDonor,
  phone,
  email,
  password,
  district,
  division,
}) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => {
        firebase.firestore().collection("users").doc(userData.user.uid).set({
          name,
          bloodGroup,
          isDonor,
          phone,
          district,
          division,
        });
        const { user } = userData;
        AsyncStorage.setItem("@user", JSON.stringify(user));
        AsyncStorage.setItem("@is_user", "1");
      });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const Auth = ({ children }) => {
  return (
    <AuthContext.Provider value={{ login, logout, register, requestBlood }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
