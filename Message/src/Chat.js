import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Image } from "react-native";
import { MessageShape, createTextMessage, createImageMessage } from "./utils/MessageUtils";

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
      ...createImageMessage("https://cdn.bpicc.com/2019/02/24/FinishedHOME_851.jpg"),
    },
    {
      ...createTextMessage("chanayusGod"),
    },
    {
      ...createTextMessage("chanayus"),
    },
    {
      ...createImageMessage("https://cdn.bpicc.com/2020/09/30/12C18629-6788-43E1-B7F5-845AC47B4A10.jpg")
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
    {
      ...createTextMessage("chanayus"),
    },
    {
      ...createTextMessage("555555"),
    },
    {
      ...createImageMessage("https://cdn.bpicc.com/2020/09/30/xs__56.jpg")
    },
    {
      ...createImageMessage("https://cdn.bpicc.com/2020/09/30/IMG20200922092512.jpg")
    },
    {
      ...createTextMessage("chanayus"),
    },
  ];
  const [dataList, setDataList] = useState(data)
  const deleteText = (itemDelete) =>{
    const newList = dataList.filter((item, index) =>{
      if (itemDelete.id !== item.id){
        return true
      }
      return false
    })
    setDataList(newList)
  }
  const textAlert = (item) =>{
    Alert.alert(
      "Delete message?",
      "Are you sure you want to permanently delete this message?",
      [
        {
          text: "CANCEL",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "DELETE", onPress: () => deleteText(item) }
      ],
      { cancelable: false }
    );
  }
  const renderItem = ({ item }) => {
    let box;
    switch (item.type) {
      case "text":
    box = <View style={styles.textMessage}><Text style={{color: "white"}}>{item.desc}</Text></View>
        break;
      case "image":
        box = <View style={styles.imgMessage}><Image style={styles.imgBox} source={{uri: item.uri}}/></View>
        break;
      default:
        break;
    }
    return (
      <TouchableOpacity style={styles.chat} /*onPress={() => deleteText(item)}*/ onLongPress={() => textAlert(item) } delayLongPress={1000}>
        {box}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
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
  textMessage: {
    backgroundColor: "#0099FF",
    padding: 10,
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  imgMessage:{
    padding: 10,
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  imgBox:{
    width: 150,
    height: 150,
    borderRadius: 20
  }
});

export default Chat;