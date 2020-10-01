import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chat from "./src/Chat";
import Status from "./src/Status"

export default function App() {
  return (
    <View style={styles.container}>
      <Chat />
      <Status/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
