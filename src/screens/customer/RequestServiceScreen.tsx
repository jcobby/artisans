import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../../components/ui";
import { AltRegularInput } from "../../components/inputs";
import { ButtonInstance } from "../../components/buttons";
import { useNavigation } from "@react-navigation/native";

export default function RequestServiceScreen() {
  const navigation = useNavigation<any>();

  const handleSubmit = () => {
    // In a real app, send request to backend then navigate to booking status.
    navigation.navigate("BookingStatus");
  };

  return (
    <View className="flex-1 bg-white">
      <Header title="Request service" showBack />

      <ScrollView className="px-5 pt-4" contentContainerStyle={{ paddingBottom: 32 }}>
        <Text className="text-sm text-gray-600 mb-4">
          Share a few details about the job. Your request will be sent to the
          artisan.
        </Text>

        <AltRegularInput
          label="Job title"
          placeholder="e.g. Fix power issue in living room"
          value={""}
          onChangeVal={() => {}}
        />

        <AltRegularInput
          label="Location"
          placeholder="e.g. East Legon, Accra"
          value={""}
          onChangeVal={() => {}}
        />

        <AltRegularInput
          label="Preferred date"
          placeholder="e.g. Today or tomorrow"
          value={""}
          onChangeVal={() => {}}
        />

        <AltRegularInput
          label="Extra details"
          placeholder="Describe the issue..."
          value={""}
          onChangeVal={() => {}}
        />

        <ButtonInstance
          label="Send request"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={handleSubmit}
        />
      </ScrollView>
    </View>
  );
}
