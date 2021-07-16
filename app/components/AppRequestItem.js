import React, { useState } from "react";
import { View, Text, Pressable, Modal, Image } from "react-native";
import AppButton from "./AppButton";
import { appRequestItem } from "../config/Styles";
import { convertToDate } from "../auth/Auth";

const AppRequestItem = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable onPress={() => setModalVisible(true)}>
      <View style={appRequestItem.container}>
        <View style={appRequestItem.bloodGroup}>
          <Text style={appRequestItem.bloodGroupText}>{data.bloog_group}</Text>
        </View>
        <View style={appRequestItem.reqInfo}>
          <Text style={appRequestItem.name}>{data.name}</Text>
          <Text>
            <Text style={appRequestItem.label}>Date: </Text>
            {convertToDate(data.date)}
          </Text>
          <Text>
            <Text style={appRequestItem.label}>Location: </Text>
            {data.location}, {data.district}, {data.division}.
          </Text>
        </View>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={appRequestItem.m_container}>
          <Text
            style={{
              fontSize: 22,
              marginTop: 30,
              marginBottom: 30,
              fontWeight: "700",
            }}
          >
            Patient Information
          </Text>
          <View style={appRequestItem.m_headerContainer}>
            <View style={appRequestItem.m_header}>
              <Image
                style={appRequestItem.m_image}
                source={require("../assets/images/logo.png")}
              />
            </View>
            <View
              style={[appRequestItem.m_header, { backgroundColor: "#DB1120" }]}
            >
              <Text style={appRequestItem.m_bloodGroup}>
                {data.bloog_group}
              </Text>
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
                <Text style={appRequestItem.m_infoDesc}>{data.name}</Text>
              </View>
            </View>
            <View style={appRequestItem.m_infoItem}>
              <View style={appRequestItem.m_infoTitleContainer}>
                <Text style={appRequestItem.m_infoTitle}>Location:</Text>
              </View>
              <View style={appRequestItem.m_infoDescContainer}>
                <Text style={appRequestItem.m_infoDesc}>
                  {data.location}, {data.district}, {data.division}.
                </Text>
              </View>
            </View>
            <View style={appRequestItem.m_infoItem}>
              <View style={appRequestItem.m_infoTitleContainer}>
                <Text style={appRequestItem.m_infoTitle}>Date:</Text>
              </View>
              <View style={appRequestItem.m_infoDescContainer}>
                <Text style={appRequestItem.m_infoDesc}>
                  {convertToDate(data.date)}
                </Text>
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
                <Text style={appRequestItem.m_infoDesc}>{data.phone}</Text>
              </View>
            </View>
          </View>
          <View style={{ width: 280 }}>
            <AppButton
              type="primary"
              title="CLOSE"
              onClick={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </Pressable>
  );
};

export default AppRequestItem;
