import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  Button,
  Image,
} from "react-native";
import AppButton from "./AppButton";
import { appRequestItem } from '../config/Styles'

const AppRequestItem = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable onPress={() => setModalVisible(true)}>
      <View style={appRequestItem.container}>
        <View style={appRequestItem.bloodGroup}>
          <Text style={appRequestItem.bloodGroupText}>A+</Text>
        </View>
        <View style={appRequestItem.reqInfo}>
          <Text style={appRequestItem.name}>Mr. X</Text>
          <Text>
            <Text style={appRequestItem.label}>Date: </Text>10/06/2020
          </Text>
          <Text>
            <Text style={appRequestItem.label}>Location: </Text>Dhaka,
            Bangladesh
          </Text>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={appRequestItem.m_container}>
          <View style={appRequestItem.m_headerContainer}>
            <View style={appRequestItem.m_header}>
              <Image
                style={appRequestItem.m_image}
                source={require("../assets/images/logo.jpg")}
              />
            </View>
            <View style={[appRequestItem.m_header, { backgroundColor: "red" }]}>
              <Text style={appRequestItem.m_bloodGroup}>A+</Text>
            </View>
          </View>
          <View style={appRequestItem.m_info}>
            <View
              style={[
                appRequestItem.m_infoItem,
                { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
              ]}
            >
              <View style={appRequestItem.m_infoTitleContainer}>
                <Text style={appRequestItem.m_infoTitle}>Name:</Text>
              </View>
              <View style={appRequestItem.m_infoDescContainer}>
                <Text style={appRequestItem.m_infoDesc}>John Doe</Text>
              </View>
            </View>
            <View style={appRequestItem.m_infoItem}>
              <View style={appRequestItem.m_infoTitleContainer}>
                <Text style={appRequestItem.m_infoTitle}>Location:</Text>
              </View>
              <View style={appRequestItem.m_infoDescContainer}>
                <Text style={appRequestItem.m_infoDesc}>Mirpur 2, Dhaka</Text>
              </View>
            </View>
            <View style={appRequestItem.m_infoItem}>
              <View style={appRequestItem.m_infoTitleContainer}>
                <Text style={appRequestItem.m_infoTitle}>Date:</Text>
              </View>
              <View style={appRequestItem.m_infoDescContainer}>
                <Text style={appRequestItem.m_infoDesc}>25/08/2020</Text>
              </View>
            </View>
            <View
              style={[
                appRequestItem.m_infoItem,
                {
                  borderBottomWidth: 0,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                },
              ]}
            >
              <View style={appRequestItem.m_infoTitleContainer}>
                <Text style={appRequestItem.m_infoTitle}>Contact:</Text>
              </View>
              <View style={appRequestItem.m_infoDescContainer}>
                <Text style={appRequestItem.m_infoDesc}>12152-6546556</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 280 }}>
            <AppButton
              type="secondary"
              title="DONE"
              onClick={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  );
};

export default AppRequestItem;
