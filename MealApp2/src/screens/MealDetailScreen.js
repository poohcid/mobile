import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  const mealID = props.navigation.getParam("id");
  const meal = MEALS.find((meal) => mealID === meal.id);
  console.log(meal);
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>{meal.title}</Text>
      <Text>{meal.steps.map((value) => value)}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  const mealID = navigationData.navigation.getParam("id");
  const meal = MEALS.find((meal) => mealID === meal.id);
  return { headerTitle: meal.title };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
