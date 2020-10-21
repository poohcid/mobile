import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  const mealID = props.navigation.getParam("id");
  const meal = MEALS.find((meal) => mealID === meal.id);
  console.log(meal);
  const renderText = (value, id) =>{
    return <Text key={id}>{value}</Text>
  }

  return (
    <View style={styles.screen}>

    <ScrollView>
      <Image style={styles.image} source={{uri:meal.imageUrl}} />
    <Text>The Meal Detail Screen!</Text>
      <Image sr />
      <Text>{meal.title}</Text>
      <Text>Ingredients</Text>
      {meal.ingredients.map(renderText)}
      <Text>Steps</Text>
      {meal.steps.map(renderText)}
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />

    </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const mealID = navigationData.navigation.getParam("id");
  const meal = MEALS.find((meal) => mealID === meal.id);
  return { headerTitle: meal.title, headerRight:() => {
    return (
      <TouchableOpacity
        >
          <Ionicons name="ios-star" size={25} />
        </TouchableOpacity>
    )
  }};
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width:100,
    height:100
  }
});

export default MealDetailScreen;
