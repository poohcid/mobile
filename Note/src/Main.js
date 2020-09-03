import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import Note from "./Note";

const Main = ({ noteSubmit, noteHandle, text, note, noteDelete }) => {
  /*
  const [note, setNote] = useState([]);
  const [text, setText] = useState("");
  const noteHandle = (e) => {
    setText(e.target.value);
  };
  const noteSubmit = (e) => {
    e.preventDefault();
    setNote([...note, text]);
    console.log(note);
  };
  */
  return (
    <View style={styles.container}>
      <Text>สมุดบันทึก</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.tinput}
          placeholder="บันทึกข้อความที่นี่"
          value={text}
          onChange={noteHandle}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Button title="บันทึก" onPress={noteSubmit}></Button>
      </View>
      <View style={styles.input}>
        <Note arrText={note} noteDelete={noteDelete} />
      </View>
      <View style={{ position: "absolute", bottom: 50, left: 200 }}>
        <Image
          source={require("../assets/IT.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 50,
    alignItems: "center",
  },
  tinput: {
    borderWidth: 2,
    borderColor: "red",
  },
  input: {
    width: "75%",
  },
});

export default Main;
