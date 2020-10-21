import React from "react";
//import { HeaderButton } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  console.log(favMeals);
  return (
    // <View style={styles.screen}>
    //   <Text>The Favorites Screen!</Text>
    // </View>
    <MealList meals={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return { headerTitle: "Your Favorites" };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
