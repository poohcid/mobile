import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  const { round, correctNumber, startGameHandler } = props;
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {round}</Text>
      <Text>Correct Number was: {correctNumber}</Text>
      <Button
        title="START GAME"
        onPress={() => {
          startGameHandler();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
