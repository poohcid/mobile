import React, {useCallback, useEffect} from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Ionicons } from "@expo/vector-icons";
import MealItem from "../components/MealItem"
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, isFavorite } from "../store/actions/mealsAction"

let dispatch

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const mealID = props.navigation.getParam("id");
  dispatch = useDispatch();
  // useEffect(() =>{
  //   props.navigation.setParams({ toggleFav: toggleFavoriteHandle })
  // }, [])
  const meal = MEALS.find((meal) => mealID === meal.id);
  console.log(meal)
  const renderText = (value, id) =>{
    return <Text key={id}>{value}</Text>
  }

  return (
    <View style={styles.screen}>

    <ScrollView>
    <MealItem
        title={meal.title}
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        image={meal.imageUrl}
        onSelectMeal={() => {
        }}
      />
      <Text style={{ textAlign: "center", fontWeight: 'bold', fontSize: 20 }}>Ingredients</Text>
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
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFavoriteHandle = () =>{
    dispatch(isFavorite(mealID))
  }
  const toggleFavoriteHandle = () =>{
    dispatch(toggleFavorite(mealID))
  }
  //const isFavoriteConst = isFavorite()
  //console.log(navigationData.toggleFav)
  const meal = MEALS.find((meal) => mealID === meal.id);
  return { headerTitle: meal.title, headerRight:() => {
    return (
      <TouchableOpacity onPress={()=>{
        toggleFavoriteHandle()
        }}>
          <Ionicons name="ios-star" size={50} color={"yellow"}/>
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
