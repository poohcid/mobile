import React from "react";
import { Platform } from "react-native";
import { HeaderButtons } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

//import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButtons
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      //color={Platform.OS === "android" ? "white" : Colors.primaryColor}
      color={"white"}
    />
  );
};

export default CustomHeaderButton;
