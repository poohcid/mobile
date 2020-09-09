import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Keyboard from "./src/Keyboard";

export default function App() {
  const [text, setText] = useState([""]);
  const [result, setResult] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Text style={{ textAlign: "right" }}>{text}</Text>
        <Text style={{ textAlign: "right" }}>{result}</Text>
      </View>
      <Keyboard setText={setText} text={text} setResult={setResult} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    marginTop: 25,
  },
});
