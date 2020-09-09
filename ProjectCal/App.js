import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Keyboard from "./src/Keyboard";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Text style={styles.text}>{text}</Text>
        <Text style={{...styles.text, fontSize: 40}}>{result}</Text>
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
  text:{
    textAlign: "right",
    fontSize: 30,
    margin: 10
  }
});
