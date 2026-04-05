import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const messages = [
  { id: "1", text: "Hello Doc, hope you're fine?", sender: "me" },
  { id: "2", text: "Yes I am, and you?", sender: "them" },
  { id: "3", text: "I am good too, thank you 😊", sender: "me" },
  {
    id: "4",
    text: "So I wanted to talk to you about my grandma’s illness...",
    sender: "me",
  },
  { id: "5", text: "Ok, I would check", sender: "them" },
  { id: "6", text: "Sent the cost already Doc", sender: "me" },
  { id: "7", text: "Haven’t gotten the money you sent", sender: "them" },
];

export default function ChatTextScreen() {
  const [input, setInput] = useState("");
  const navigation = useNavigation<any>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-white"
    >
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-14 pb-4 border-b border-gray-200">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} />
          <Text className="ml-3 text-base font-medium">Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-green-100 p-3 rounded-full">
          <Feather name="phone" size={18} color="#16a34a" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100">
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
          className="w-10 h-10 rounded-full mr-3"
        />
        <View>
          <Text className="font-semibold">Joseph Aina</Text>
          <Text className="text-xs text-gray-500">Health Expert</Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View
            className={`mb-3 ${
              item.sender === "me" ? "items-end" : "items-start"
            }`}
          >
            <View
              className={`px-4 py-3 rounded-2xl max-w-[75%] ${
                item.sender === "me"
                  ? "bg-gray-200 rounded-tr-none"
                  : "bg-green-100 rounded-tl-none"
              }`}
            >
              <Text className="text-sm text-gray-800">
                {item.text}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Input */}
      <View className="flex-row items-center px-4 py-3 border-t border-gray-200">
        <TextInput
          placeholder="Write Message"
          value={input}
          onChangeText={setInput}
          className="flex-1 bg-gray-100 px-4 py-3 rounded-xl text-sm"
        />

        <TouchableOpacity className="ml-3">
          <Ionicons name="send" size={22} color="#16a34a" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
