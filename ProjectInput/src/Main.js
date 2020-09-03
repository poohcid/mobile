import { StatusBar, useState } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            width: "90%",
            marginTop: 50,
            marginLeft: 10,
          },
        ]}
      >
        <TextInput placeholder="Input Text" style={styles.input} />
        <Button title="ADD"/>
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
    backgroundColor: "#fff",
    alignContent: "center",
    flexDirection: "column"
  },
  input: {
    borderWidth: 2,
    borderColor: "red",
    textAlign: "center",
  },
  Button: {
    width: "10%",
  },
});

export default Main;
