import React from "react";
//import { HeaderButton } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals)
  //const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
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
