import React, { type PropsWithChildren } from "react";
import { useColorScheme } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider as ParentProvider,
} from "react-native-paper";
import DarkTheme from "../constants/themes/dark.json";
import LightTheme from "../constants/themes/light.json";
const PaperProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: colorScheme === "dark" ? DarkTheme.colors : LightTheme.colors, // Copy it from the color codes scheme and then use it here
  };
  return <ParentProvider theme={theme}>{children}</ParentProvider>;
};

export default PaperProvider;
