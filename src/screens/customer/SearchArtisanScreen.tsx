import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchInput from "../../components/inputs";
import { Colors } from "../../theme/colors";

const RECENTS = [
  "Electrician",
  "Mechanic in Ajah",
  "Teacher",
  "Plumber",
];

export default function SearchScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const handleSubmit = (value?: string) => {
    const q = value ?? search;
    if (!q.trim()) return;

    navigation.navigate("SearchResults" as never );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="px-5 pt-2 gap-5">

        {/* Header */}
        <View className="flex-row items-center gap-3">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>

          <Text className="text-lg font-semibold">
            Search
          </Text>
        </View>

        {/* Search Input */}
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search for Artisans"
          onSubmit={() => handleSubmit()}
        />

        {/* Recents */}
        <View className="gap-3">
          <Text className="text-sm font-semibold text-gray-500">
            Recent searches
          </Text>

          <FlatList
            data={RECENTS}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="flex-row items-center gap-3 py-3"
                onPress={() => handleSubmit(item)}
              >
                <Ionicons
                  name="time-outline"
                  size={18}
                  color="#6b7280"
                />

                <Text className="text-base">
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}
