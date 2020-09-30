import { StatusBar } from "expo-status-bar";
import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MessageShape, createTextMessage } from "./utils/MessageUtils";

const Chat = () => {
  const propTypes = {
    messages: PropTypes.arrayOf(MessageShape).isRequired,
    onPressMessage: PropTypes.func,
  };
  const data = [
    {
      ...createTextMessage("chanayus"),
    },
    {
      ...createTextMessage("555555"),
    },
    {
      ...createTextMessage("dssddfs"),
    },
    {
      ...createTextMessage("chanayusGod"),
    },
    {
      ...createTextMessage("chanayus"),
    },
    {
      ...createTextMessage("555555"),
    },
    {
      ...createTextMessage("chanayus"),
    },
    {
      ...createTextMessage("555555"),
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.chat}>
        <View style={styles.message}>
          <Text>{item.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  chat: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "flex-end",
  },
  message: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default Chat;
