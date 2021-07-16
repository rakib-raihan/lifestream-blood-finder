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
export const convertToDate = (date) => date.toDate().toLocaleDateString();

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
    AsyncStorage.removeItem("@user");
    AsyncStorage.removeItem("@is_user");
    return { success: false, error: error.message };
  }
};

const logout = async () => {
  try {
    AsyncStorage.removeItem("@user");
    AsyncStorage.removeItem("@is_user");
    await firebase.auth().signOut();
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
      });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const getRequests = async () => {
  let requests = {};
  try {
    await firebase
      .firestore()
      .collection("requests")
      .get()
      .then((data) => {
        requests = data.docs.map((doc) => doc.data());
      });
    return { success: true, error: null, requests: requests };
  } catch (error) {
    return { success: true, error: "Error getting data!" };
  }
};

const getDonors = async () => {
  let requests = {};
  try {
    await firebase
      .firestore()
      .collection("users")
      .where("isDonor", "==", true)
      .get()
      .then((data) => {
        requests = data.docs.map((doc) => doc.data());
      });
    return { success: true, error: null, requests: requests };
  } catch (error) {
    return { success: true, error: "Error getting data!" };
  }
};

const checkForUpdate = async () => {
  let update = {};
  try {
    await firebase
      .firestore()
      .collection("config")
      .doc("update")
      .get()
      .then((data) => {
        update = data.data();
      });
    return { success: true, error: null, update: update };
  } catch (error) {
    return { success: true, error: "Error getting data!" };
  }
};

const Auth = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        requestBlood,
        getRequests,
        getDonors,
        checkForUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
