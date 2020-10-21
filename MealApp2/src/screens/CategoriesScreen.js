import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { Ionicons } from "@expo/vector-icons";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("cateMeal", { id: itemData.item.id });
        }}
      />

      // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อเรียกใช้ <CategoryGridTile>
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์เมื่อใช้ <FlatList>
    // <View>
    //   <Text>Categories Screen</Text>
    // </View>
  );
};

// กำหนด navigationOptions เช่่น การปรับแต่งเฮดเดอร์ที่นี่ได้
CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meal",
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
