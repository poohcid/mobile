import { StatusBar, useState } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

const Flex1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>3</Text>
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

const stylesBoxsInit = {
    alignItems: "center",
    margin: 2,
    height: 300,
    width: "80%",
    justifyContent: "center",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    width: "50%",
  },

  box1: {
    ...stylesBoxsInit,
    backgroundColor: "red",
    flex: 1
  },
  box2: {
    ...stylesBoxsInit,
    backgroundColor: "blue",
    flex: 2
  },
  box3: {
    ...stylesBoxsInit,
    backgroundColor: "green",
  },
  text: {
    fontSize: 28,
    color: "white",
    justifyContent: "center",
  },
});

export default Flex1;
