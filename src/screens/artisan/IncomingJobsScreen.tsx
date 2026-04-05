import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Header, { ServiceBookingCard } from "../../components/ui";
import { useNavigation } from "@react-navigation/native";

const MOCK_JOBS = [
  {
    id: "1",
    title: "Fix power outage",
    provider: "Customer • East Legon",
    date: "Today • 3:00 PM",
    price: "₵250",
  },
  {
    id: "2",
    title: "Install ceiling fan",
    provider: "Customer • Spintex",
    date: "Tomorrow • 10:30 AM",
    price: "₵180",
  },
];

export default function IncomingJobsScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-white">
      <Header title="Incoming jobs" showBack />

      <FlatList
        contentContainerStyle={{ padding: 20, gap: 12 }}
        data={MOCK_JOBS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("JobDetails", {
                jobId: item.id,
              })
            }
          >
            <ServiceBookingCard
              title={item.title}
              provider={item.provider}
              date={item.date}
              price={item.price}
              status="active"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
