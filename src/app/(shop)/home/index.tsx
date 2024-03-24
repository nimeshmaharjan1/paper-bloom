import { Stack, router } from "expo-router";
import React from "react";
import { Button, Surface, Text, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Surface className="h-full items-center justify-center">
      <Stack.Screen />
      <Button
        onPress={() => {
          router.push("/(shop)/home/products");
        }}
        mode="contained"
      >
        Press Me
      </Button>
      <Text>HomeScreen</Text>
    </Surface>
  );
};

export default HomeScreen;
