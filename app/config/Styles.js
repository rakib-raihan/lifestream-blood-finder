import Colors from "./Colors";
import { StyleSheet } from "react-native";

const container = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  view: {
    width: "80%",
    maxWidth: 500,
  },
});

const splashScreen = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
  },
});

const appTextInput = StyleSheet.create({
  label: {
    color: Colors.darkGray,
    fontSize: 14,
    marginBottom: 0,
  },
  input: {
    borderColor: Colors.darkGray,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
  active: {
    borderColor: Colors.red,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const appHeader = StyleSheet.create({
  text: {
    color: Colors.darkGray,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
});

const appButton = StyleSheet.create({
  primaryContainer: {
    backgroundColor: Colors.red,
    padding: 12,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  primaryText: {
    color: Colors.white,
    letterSpacing: 2,
    fontSize: 16,
  },
  secContainer: {
    borderColor: Colors.pink,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  secText: {
    color: Colors.black,
    letterSpacing: 2,
    fontSize: 16,
  },
});

const appSwitch = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  switch: {
    marginRight: -2,
  },
});

const appPicker = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  selectedItem: {
    color: Colors.red,
    fontWeight: "bold",
  },
  selectedItemSimple: {
    color: Colors.black,
    fontWeight: "bold",
  },
  itemView: {
    backgroundColor: Colors.red,
    borderRadius: 5,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  itemText: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.white,
  },
  itemViewSimple: {
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  itemTextSimple: {
    fontSize: 16,
    color: Colors.black,
  },
});

const appRequestItem = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: Colors.lightGray,
    marginBottom: 10,
  },
  bloodGroup: {
    width: 85,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
  },
  bloodGroupText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: "bold",
  },
  reqInfo: {
    marginLeft: 20,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  label: {
    fontWeight: "800",
    color: "red",
  },
  m_container: {
    alignItems: "center",
  },
  m_headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  m_header: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.red,
    margin: 20,
  },
  m_info: {
    width: "100%",
    maxWidth: 280,
    marginBottom: 20,
  },
  m_imageContainer: {},
  m_image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.red,
    margin: 20,
  },
  m_bloodGroupContainer: {},
  m_bloodGroup: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.white,
  },
  m_infoItem: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  m_infoTitleContainer: {
    width: "40%",
  },
  m_infoDescContainer: {
    width: "60%",
    alignItems: "flex-end",
  },
  m_infoTitle: {
    color: "gray",
    marginRight: 15,
  },
  m_infoDesc: {
    fontWeight: "bold",
    textAlign: "right",
  },
});

const welcomeScreen = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: -120,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  buttonContainer: {
    width: "70%",
    marginBottom: 20,
  },
});

export {
  splashScreen,
  appTextInput,
  appHeader,
  container,
  appButton,
  appSwitch,
  appPicker,
  appRequestItem,
  welcomeScreen,
};
