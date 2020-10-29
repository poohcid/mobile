import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

const MealsNavigator = createStackNavigator(
  {
    cateScreen: { screen: CategoriesScreen },
    cateMeal: { screen: CategoryMealsScreen },
    mealDeatail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "purple" },
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    FavoritesMealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "purple" },
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  // {
  //   cateScreen: { screen: CategoriesScreen },
  //   cateMeal: { screen: CategoryMealsScreen },
  //   mealDeatail: { screen: MealDetailScreen },
  // },
  {
    Meals: MealsNavigator,
    Favorites: FavNavigator,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "purple" },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: "ios-star",
    }),
  }
);

const FiltersNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen,
  },
});

const MainNavigator = createDrawerNavigator({
  MealsFav: {
    screen: MealsFavTabNavigator,
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: { drawerLabel: "Menu 1" },
  },
});

export default createAppContainer(MainNavigator);
//export default createAppContainer(MealsFavTabNavigator);
