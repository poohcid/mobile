import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TextComponent from "./src/TextComponent";
import BoldAndBeautiful from "./src/BoldAndBeautiful";
import UselessTextInputMultiline from "./src/UselessTextInputMultiline";
import ScrollViewComponent from "./src/ScrollViewComponent";
import StyleSheetView from "./src/StyleSheetView";
import AbsoluteFillObject from "./src/AbsoluteFillObject";
import HairlineWidth from "./src/HairlineWidth";

export default function App() {
  return (
    //<TextComponent />
    //<BoldAndBeautiful />
    //<UselessTextInputMultiline />
    //<ScrollViewComponent />
    //<StyleSheetView />
    //<AbsoluteFillObject />
    <HairlineWidth />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
