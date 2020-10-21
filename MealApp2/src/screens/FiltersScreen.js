import React, {useState} from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const FiltersScreen = (props) => {
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)
  const [btn4, setBtn4] = useState(false)

  return (
    <View style={styles.screen}>
      <View style={{flexDirection:'row'}}>
        <Text>Gluten-free</Text>
        <Switch trackColor={{true:'red', false:'blue'}} onValueChange={() => setBtn1(!btn1)} value={btn1}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Lactose-free</Text>
        <Switch trackColor={{true:'red', false:'blue'}} onValueChange={() => setBtn2(!btn2)} value={btn2}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Vegan</Text>
        <Switch trackColor={{true:'red', false:'blue'}} onValueChange={() => setBtn3(!btn3)} value={btn3}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text>Vegetarian</Text>
        <Switch trackColor={{true:'red', false:'blue'}} onValueChange={() => setBtn4(!btn4)} value={btn4}/>
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        >
          <Ionicons name="ios-menu" size={25} />
        </TouchableOpacity>
      );
    },
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        >
          <Ionicons name="ios-save" size={25} />
        </TouchableOpacity>
      );
    },
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
