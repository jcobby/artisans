import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SUPPORT_THREADS = [
  {
    id: "1",
    name: "Support",
    lastMessage: "We have received your request.",
    time: "10:24 AM",
  },
];

export default function CustomerChatScreen() {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-14 pb-4 items-center border-b border-gray-200">
        <Text className="text-lg font-semibold">Messages</Text>
      </View>

      <FlatList
        data={SUPPORT_THREADS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/lego/1.jpg",
                }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <View>
                <Text className="font-semibold">{item.name}</Text>
                <Text className="text-xs text-gray-500" numberOfLines={1}>
                  {item.lastMessage}
                </Text>
              </View>
            </View>

            <View className="items-end">
              <Text className="text-xs text-gray-400 mb-1">{item.time}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
