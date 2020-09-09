import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Keyboard = ({ setText, text, setResult }) => {
  const setInfix = (e, text1) => {
    setText(text+text1)
  };
  const deleteText = (e) => {
    if (text !== "") {
      text = text.slice(0, text.length - 1);
      setText(text);
    }
  };
  const calculate = (e) => {
    try {
      const sum = eval(text);
      setResult(sum);
    } catch (e) {
      if (e instanceof SyntaxError) {
         setResult("Error")
    }
  }
  };
  const setDot = (e, text1) =>{
    let isSet = false
    text.split("").forEach((value, index, arr) =>{
      if (value === "."){
        isSet = false
      }
      else if (isNaN(value)){
        isSet = true
        if (index === arr.length - 1){
          isSet = false
        }
      }
    })
    if (isSet){
      setText(text+text1)
     }
  }
  return (
    <View style={styles.container}>
      <View style={styles.col1}>
        <Button text1={"1"} setInfix={setInfix} />
        <Button text1={"4"} setInfix={setInfix} />
        <Button text1={"7"} setInfix={setInfix} />
        <Button text1={"."} setInfix={setDot} />
      </View>
      <View style={styles.col1}>
        <Button text1={"2"} setInfix={setInfix} />
        <Button text1={"5"} setInfix={setInfix} />
        <Button text1={"8"} setInfix={setInfix} />
        <Button text1={"0"} setInfix={setInfix} />
      </View>
      <View style={styles.col1}>
        <Button text1={"3"} setInfix={setInfix} />
        <Button text1={"6"} setInfix={setInfix} />
        <Button text1={"9"} setInfix={setInfix} />
        <Button text1={"="} setInfix={calculate} />
      </View>
      <View style={styles.col2}>
        <Button text1={"Del"} setInfix={deleteText} />
        <Button text1={"+"} setInfix={setInfix} />
        <Button text1={"-"} setInfix={setInfix} />
        <Button text1={"*"} setInfix={setInfix} />
        <Button text1={"/"} setInfix={setInfix} />
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
