import { StatusBar, useState } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

const Button2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.box2}>
          <TextInput placeholder="Input Text" style={styles.tinput}></TextInput>
          <Button style={styles.button} title="ADD"></Button>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 50, left: 200 }}>
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
    alignItems: "center"
  },
  tinput: {
    borderWidth: 2,
    borderColor: "red",
    marginRight: 20,
    textAlign: "center",
    width: "50%"
  },
  button: {
    height: 30,
    width: 200,
  },
  box1: {
    flex: 1,
    flexDirection: "row",
  },
  box2: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    width: 200,
    margin: 50
  },
});

export default Button2;
