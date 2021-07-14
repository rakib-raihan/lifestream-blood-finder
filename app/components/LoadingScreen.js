import React from "react";
import { ActivityIndicator } from "react-native";

const LoadingScreen = ({ loading }) => {
  return (
    loading && (
      <ActivityIndicator
        size="large"
        color="red"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
    )
  );
};

export default LoadingScreen;
