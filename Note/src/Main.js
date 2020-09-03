import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import Note from "./Note";

const Main = () => {
  const [note, setNote] = useState([]);
  const [text, setText] = useState("");
  const noteHandle = (e) => {
    setText(e);
  };
  const noteSubmit = (e) => {
    e.preventDefault();
    setNote([...note, text]);
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
    <View style={styles.container}>
      <Text>สมุดบันทึก</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.tinput}
          placeholder="บันทึกข้อความที่นี่"
          value={text}
          onChangeText={noteHandle}
        ></TextInput>
      </View>
      <View style={styles.input}>
        <Button title="บันทึก" onPress={noteSubmit}></Button>
      </View>
      <View style={styles.input}>
        <Note arrText={note} noteDelete={noteDelete} />
      </View>
      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <Image
          source={require("../assets/IT.png")}
          style={{ width: 80, height: 80 }}
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
