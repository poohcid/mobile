import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Screen2 = (props) => {
  const prev = props.navigation.getParam("prev");
  const id = props.navigation.getParam("id");
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Screen 2 !!</Text>
      <Text style={styles.content}>Prev. Screen is {prev}</Text>
      <Text style={styles.content}>ID: {id}</Text>
      <Button
        title="Go to Screen 3"
        onPress={() => {
          props.navigation.navigate("S3");
        }}
      />
    </View>
  );
};

Screen2.navigationOptions = (navigationData) => {
  const id = navigationData.navigation.getParam("id");
  const newHead = "ID-" + id.toString();
  return { title: newHead };
};

// Screen2.navigationOptions = { headerTitle: "TestAgain" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 20,
  },
});

export default Screen2;
