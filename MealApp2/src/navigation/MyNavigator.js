import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Tab1 from "../screens/Tab1";
import Tab2 from "../screens/Tab2";
import Tab3 from "../screens/Tab3";
import Draw1 from "../screens/Draw1";
import Draw2 from "../screens/Draw2";

const MyNavigator = createStackNavigator(
  {
    S1: {
      screen: Screen1,
      navigationOptions: {
        title: "Screen 1",
      },
    },
    S2: { screen: Screen2 },
    S3: { screen: Screen3 },
    // S3: MyTabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "lightblue" },
    },
  }
);

const MyTabNavigator = createBottomTabNavigator(
  {
    Tab_1: {
      screen: Tab1,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="wechat" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Tab_2: { screen: Tab2 },
    // Tab_2: MyNavigator,
    Tab_3: { screen: Tab3 },
  },
  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: {
        fontSize: 18,
      },
      style: {
        backgroundColor: "lightblue",
      },
    },
  }
);

const MyDraw1Nav = createStackNavigator(
  {
    Draw_1: Draw1,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? "purple" : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "purple",
    },
  }
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    // Draw_1: {
    //   screen: Draw1,
    //   navigationOptions: {
    //     drawerLabel: "Menu 1",
    //     drawerIcon: () => {
    //       return <AntDesign name="tags" size={24} color="orange" />;
    //     },
    //   },
    // },
    Draw_1: MyDraw1Nav,
    Draw_2: Draw2,
  },
  {
    contentOptions: { activeTintColor: "orange" },
  }
);

export default createAppContainer(MyDrawerNavigator);
