import React from "react";
import { View, Text, FlatList } from "react-native";
import Header, { ServiceBookingCard } from "../../components/ui";

const BOOKINGS = [
  {
    id: "1",
    title: "Fix power outage",
    provider: "Abiodun Taiwo • Electrician",
    date: "Today • 3:00 PM",
    price: "₵250",
    status: "active" as const,
  },
  {
    id: "2",
    title: "Install ceiling fan",
    provider: "Abiodun Taiwo • Electrician",
    date: "Last week",
    price: "₵180",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Kitchen sink repair",
    provider: "Grace Mensah • Plumber",
    date: "2 weeks ago",
    price: "₵150",
    status: "cancelled" as const,
  },
];

export default function CustomerBookingsScreen() {
  return (
    <View className="flex-1 bg-white">
      <Header title="My bookings" />

      <FlatList
        contentContainerStyle={{ padding: 20, gap: 12 }}
        data={BOOKINGS}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text className="text-sm text-gray-600 mb-4">
            Track your ongoing and past bookings with artisans.
          </Text>
        }
        renderItem={({ item }) => (
          <ServiceBookingCard
            title={item.title}
            provider={item.provider}
            date={item.date}
            price={item.price}
            status={item.status}
          />
        )}
      />
    </View>
  );
}
