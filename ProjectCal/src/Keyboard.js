import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Keyboard = ({ setText, text, setResult }) => {
  const setPrefix = (e, text1) => {
    let number = text.pop();
    number = number + text1;
    setText([...text, number]);
    console.log(text, text.length);
  };
  const operator = (e, text1) => {
    if (text.length !== 0) setText([...text, text1, ""]);
  };
  const deleteText = (e) => {
    let last = text.pop();
    console.log(last);
    if (last !== "") {
      last = last.slice(0, last.length - 1);
      setText([...text, last]);
    } else {
      setText([text]);
    }
  };
  const calculate = (e) => {
    let sum = "No";
    let action = "";
    text.forEach((value, index) => {
      if (action !== "") {
        if (action === "+") {
          sum = sum + Number(value);
        } else if (action === "-") {
          sum = sum - Number(value);
        }
        action = "";
      } else {
        if (value === "+") {
          action = "+";
        } else if (value === "-") {
          action = "-";
        } else {
          if (sum === "No") {
            sum = Number(value);
          }
        }
      }
    });
    setResult(sum);
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
        <Button text1={"="} setPrefix={calculate} />
      </View>
      <View style={styles.col2}>
        <Button text1={"Del"} setPrefix={deleteText} />
        <Button text1={"+"} setPrefix={operator} />
        <Button text1={"-"} setPrefix={operator} />
        <Button text1={"*"} setPrefix={operator} />
        <Button text1={"/"} setPrefix={operator} />
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
