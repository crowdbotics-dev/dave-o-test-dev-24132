import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 54,
      top: 96,
      position: "absolute",
      height: 89,
      width: 114,
      backgroundColor: "#bf52e9",
      borderRadius: 0,
      color: "#777777",
      borderColor: "#632626",
      borderWidth: 2
    }}></View><Text style={{
      left: 46,
      top: 224,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      fontWeight: 700
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;