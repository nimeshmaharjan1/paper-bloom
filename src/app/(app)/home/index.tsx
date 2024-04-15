import { View } from "moti";
import React from "react";
import { Button, Surface, Text, TextInput } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Surface className="h-full" style={{ paddingTop: top }}>
      <View className="header-section gap-3 px-4">
        <TextInput
          left={<TextInput.Icon icon="magnify" />}
          placeholder="Search"
        />
        <Button mode="contained" onPress={() => {}}>
          Hello
        </Button>
      </View>
      <Text>Home</Text>
    </Surface>
  );
};

export default Home;
