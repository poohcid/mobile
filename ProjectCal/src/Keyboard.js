import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Keyboard = ({ setText, text }) => {
  const setPrefix = (e, text1) => {
    setText(text + text1);
  };
  const deleteText = (e) => {
    setText(text.slice(0, text.length - 1));
  };
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Button text1={"1"} setPrefix={setPrefix} />
        <Button text1={"4"} setPrefix={setPrefix} />
        <Button text1={"7"} setPrefix={setPrefix} />
        <Button text1={"."} setPrefix={setPrefix} />
      </View>
      <View style={styles.col1}>
        <Button text1={"2"} setPrefix={setPrefix} />
        <Button text1={"5"} setPrefix={setPrefix} />
        <Button text1={"8"} setPrefix={setPrefix} />
        <Button text1={"0"} setPrefix={setPrefix} />
      </View>
      <View style={styles.col1}>
        <Button text1={"3"} setPrefix={setPrefix} />
        <Button text1={"6"} setPrefix={setPrefix} />
        <Button text1={"9"} setPrefix={setPrefix} />
        <Button text1={"="} setPrefix={setPrefix} />
      </View>
      <View style={styles.col2}>
        <Button text1={"Del"} setPrefix={deleteText} />
        <Button text1={"+"} setPrefix={setPrefix} />
        <Button text1={"-"} setPrefix={setPrefix} />
        <Button text1={"*"} setPrefix={setPrefix} />
        <Button text1={"/"} setPrefix={setPrefix} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
  },
  col1: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#444",
  },
  col2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#333",
  },
});

export default Keyboard;
