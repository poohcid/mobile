import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ text1, setPrefix }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={(e) => setPrefix(e, text1)}
    >
      <Text style={{ fontSize: 32, color: "white" }}>{text1}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
