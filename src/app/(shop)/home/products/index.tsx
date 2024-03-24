import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const ProductListScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Button
        onPress={() => {
          router.back();
        }}
      >
        Go Back
      </Button>
      <Text>ProductListScreen</Text>
    </View>
  );
};

export default ProductListScreen;
