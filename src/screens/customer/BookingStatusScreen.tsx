import React from "react";
import { View, Text } from "react-native";
import Header, { ServiceBookingCard } from "../../components/ui";
import { ButtonInstance } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";

export default function BookingStatusScreen() {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-1 bg-white">
      <Header title="Booking status" showBack />

      <View className="px-5 pt-4 gap-6">
        <Text className="text-sm text-gray-600">
          Your request has been sent to the artisan. You will be notified when
          they accept or respond.
        </Text>

        <ServiceBookingCard
          title="Fix power outage"
          provider="Abiodun Taiwo • Electrician"
          date="Today • 3:00 PM"
          price="₵250"
          status="active"
        />

        <ButtonInstance
          label="Back to home"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={() => navigation.navigate("CustomerTabs")}
        />
      </View>
    </View>
  );
}
