import { FontAwesome } from "@expo/vector-icons";
import { View } from "moti";
import React from "react";
import { FlatList } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

import shops from "../../../../data/shops.json";
const ShopsToGetYouStarted = () => {
  return (
    <View className="shops-to-get-started">
      <View className="flex-row items-center gap-3">
        <Text
          variant="titleLarge"
          style={{
            fontWeight: "500",
          }}
        >
          Shops to get you started
        </Text>
        <IconButton onPress={() => {}} mode="outlined" icon="chevron-right" />
      </View>
      <View>
        <FlatList
          horizontal
          data={shops}
          keyExtractor={(i) => i.id}
          contentContainerStyle={{
            gap: 12,
            paddingVertical: 24,
            paddingTop: 16,
          }}
          renderItem={({ item }) => (
            <Card className="w-72">
              <Card.Cover
                style={{
                  borderRadius: 0,
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                }}
                source={{ uri: item.image }}
              />
              <Card.Content className="mt-3">
                <Text variant="titleMedium">{item.name}</Text>
                <View className="flex-row items-center gap-1.5">
                  <Text variant="bodyMedium">{item.rating}</Text>
                  <FontAwesome name="star" />
                  <Text variant="bodyMedium">
                    ({item.reviews.toLocaleString()})
                  </Text>
                </View>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </View>
  );
};

export default ShopsToGetYouStarted;
