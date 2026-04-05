import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";

const chatUsers = [
  {
    id: "1",
    name: "Joseph Aina",
    role: "Health Expert",
    time: "10:00am",
  },
];

const callLogs = [
  {
    id: "1",
    name: "Joseph Aina",
    type: "missed", // missed | outgoing | incoming
    time: "10:00am",
  },
  {
    id: "2",
    name: "Sarah John",
    type: "outgoing",
    time: "Yesterday",
  },
  {
    id: "3",
    name: "Michael Dan",
    type: "incoming",
    time: "Mon",
  },
];


export default function ArtisanChatsTabScreen() {
const navigation = useNavigation<any>();

  const [activeTab, setActiveTab] = useState<"chats" | "calls">("chats");

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="pt-14 pb-4 items-center border-b border-gray-200">
        <Text className="text-lg font-semibold">Chats</Text>
      </View>

      {/* Tabs */}
      <View className="flex-row justify-center mt-4 border-b border-gray-200">
        <TouchableOpacity
          onPress={() => setActiveTab("chats")}
          className="px-6 pb-2"
        >
          <Text
            className={`${
              activeTab === "chats"
                ? "text-green-600 font-semibold"
                : "text-gray-400"
            }`}
          >
            Chats
          </Text>
          {activeTab === "chats" && (
            <View className="h-1 bg-green-600 mt-2 rounded-full" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("calls")}
          className="px-6 pb-2"
        >
          <Text
            className={`${
              activeTab === "calls"
                ? "text-green-600 font-semibold"
                : "text-gray-400"
            }`}
          >
            Calls
          </Text>
          {activeTab === "calls" && (
            <View className="h-1 bg-green-600 mt-2 rounded-full" />
          )}
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === "chats" ? (
        <FlatList
          data={chatUsers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatText" as never)}
              className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100"
            >
              <View className="flex-row items-center">
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/44.jpg",
                  }}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <View>
                  <Text className="font-semibold">{item.name}</Text>
                  <Text className="text-xs text-gray-500">{item.role}</Text>
                </View>
              </View>

              <Text className="text-red-500 text-xs">{item.time}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
       <FlatList
  data={callLogs}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CallScreen", {
          userId: item.id,
        })
      }
      className="flex-row items-center justify-between px-5 py-4 border-b border-gray-100"
    >
      <View className="flex-row items-center">
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          className="w-12 h-12 rounded-full mr-3"
        />

        <View>
          <Text className="font-semibold">{item.name}</Text>

          <View className="flex-row items-center mt-1">
            {item.type === "missed" && (
              <Text className="text-red-500 text-xs">
                Missed call
              </Text>
            )}

            {item.type === "outgoing" && (
              <Text className="text-gray-500 text-xs">
                Outgoing call
              </Text>
            )}

            {item.type === "incoming" && (
              <Text className="text-gray-500 text-xs">
                Incoming call
              </Text>
            )}
          </View>
        </View>
      </View>

      <Text
        className={`text-xs ${
          item.type === "missed"
            ? "text-red-500"
            : "text-gray-400"
        }`}
      >
        {item.time}
      </Text>
    </TouchableOpacity>
  )}
/>

      )}
    </View>
  );
}
