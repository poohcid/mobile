import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Screen1 = (props) => {
  console.log("============ Screen1 =============");
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to Screen 1 !!</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => {
          props.navigation.navigate("S2", { prev: "Screen1", id: 1 });
        }}
      />
    </View>
  );
};

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

export default Screen1;
