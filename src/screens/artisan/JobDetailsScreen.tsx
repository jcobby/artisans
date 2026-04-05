import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header, { InfoRow } from "../../components/ui";
import { ButtonInstance } from "../../components/buttons";

type RouteParams = {
  jobId?: string;
};

export default function JobDetailsScreen() {
  const route = useRoute();
  const { jobId } = (route.params || {}) as RouteParams;

  return (
    <View className="flex-1 bg-white">
      <Header title="Job details" showBack />

      <View className="px-5 pt-4 gap-4">
        <Text className="text-lg font-semibold text-gray-900">
          Fix power outage
        </Text>
        <Text className="text-sm text-gray-500">
          Customer in East Legon is experiencing a full power outage in their
          apartment. Check the main board and diagnose the issue.
        </Text>

        <View className="mt-2">
          <InfoRow
            iconName="location-outline"
            title="Location"
            subtitle="East Legon, Accra"
            showDivider={false}
          />
          <InfoRow
            iconName="time-outline"
            title="Preferred time"
            subtitle="Today • 3:00 PM"
            showDivider={false}
          />
          <InfoRow
            iconName="cash-outline"
            title="Budget"
            subtitle="₵250 (negotiable)"
            showDivider={false}
          />
        </View>

        <View className="mt-6 gap-3">
          <ButtonInstance
            label="Accept job"
            buttonColor="primary"
            customClass="w-full"
            clickEvt={() => {}}
          />
          <ButtonInstance
            label="Decline"
            buttonColor="secondary"
            customClass="w-full"
            clickEvt={() => {}}
          />
        </View>

        {jobId && (
          <Text className="text-xs text-gray-400 mt-4">
            Job reference: {jobId}
          </Text>
        )}
      </View>
    </View>
  );
}
