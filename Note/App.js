import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/Main";

export default function App() {
  const [note, setNote] = useState([]);
  const [text, setText] = useState("");
  const noteHandle = (e) => {
    setText(e.target.value);
  };
  const noteSubmit = (e) => {
    if (text !== "") {
      e.preventDefault();
      setNote([...note, text]);
      setText("");
    }
    console.log(note);
  };
  const noteDelete = (event, index) => {
    const index1 = note.indexOf(index);
    const arr1 = note.filter((value, index1) => {
      if (index1 !== index) {
        return value;
      }
    });
    setNote(arr1);
  };
  return (
    <Main
      noteSubmit={noteSubmit}
      noteHandle={noteHandle}
      text={text}
      note={note}
      noteDelete={noteDelete}
    />
  );
  /*
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  */
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
