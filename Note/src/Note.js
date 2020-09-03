import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Note = ({ arrText, noteDelete }) => {
  const mapNote = (note, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={(event) => noteDelete(event, index)}
      >
        <Text>{note}</Text>
      </TouchableOpacity>
    );
  };
  return <View>{arrText.map(mapNote)}</View>;
};

export default Note;
