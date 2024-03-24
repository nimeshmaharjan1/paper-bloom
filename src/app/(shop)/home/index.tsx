import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View } from "moti";
import React from "react";
import { Button, Searchbar, Surface, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import ShopsToGetYouStarted from "@/src/components/shop/home/shops-to-get-you-started";

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <Surface className="h-full px-4">
      <SafeAreaView>
        <Stack.Screen />
        <View className="gap-6">
          <View className="header gap-4">
            <View className="search-section flex-row items-center gap-3">
              <View className="flex-1">
                <Searchbar
                  className="flex-1"
                  value=""
                  placeholder="Search"
                  // onChangeText={setSearchQuery}
                  // value={searchQuery}
                />
              </View>
              <View>
                <Button
                  mode="contained"
                  buttonColor={theme.colors.elevation.level5}
                  className="h-[54px] items-center justify-center"
                  onPress={() => {}}
                >
                  <Ionicons
                    size={18}
                    name="sparkles-outline"
                    color={theme.colors.primary}
                  />
                </Button>
              </View>
            </View>
            <View className="favorites-section flex-row gap-3">
              <Button icon="heart" mode="outlined" onPress={() => {}}>
                Favorites
              </Button>
              <Button icon="check-circle" mode="outlined" onPress={() => {}}>
                Following
              </Button>
              <Button icon="tag" mode="outlined" onPress={() => {}}>
                On Sale
              </Button>
            </View>
          </View>
          <View className="body">
            <ShopsToGetYouStarted />
          </View>
        </View>
      </SafeAreaView>
    </Surface>
  );
};

export default HomeScreen;
