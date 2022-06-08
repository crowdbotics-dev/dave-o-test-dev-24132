import { Pressable } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Pressable onPress={() => navigation.navigate("Untitled4")} style={{
      position: "initial",
      width: "195px",
      height: "350px",
      marginLeft: "-10px",
      marginTop: "-10px"
    }}><View style={{
        left: 47,
        top: 93,
        position: "absolute",
        height: 60,
        width: 140,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable></View>;
};

export default Untitled2;