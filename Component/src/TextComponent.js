import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextComponent = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "orange", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default TextComponent;
