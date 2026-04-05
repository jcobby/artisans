import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Header, { SettingsToggle } from "../../components/ui";
import { ButtonInstance } from "../../components/buttons";

export default function SetAvailabilityScreen() {
  const [availableToday, setAvailableToday] = useState(true);
  const [weekends, setWeekends] = useState(false);
  const [nights, setNights] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <Header title="Set availability" showBack />

      <ScrollView className="px-5 pt-4" contentContainerStyle={{ paddingBottom: 32 }}>
        <Text className="text-sm text-gray-600 mb-4">
          Let customers know when you are generally available to take jobs.
        </Text>

        <SettingsToggle
          title="Available today"
          description="Show as available for same-day jobs."
          value={availableToday}
          onChange={setAvailableToday}
        />

        <SettingsToggle
          title="Weekends"
          description="Willing to work on Saturdays and Sundays."
          value={weekends}
          onChange={setWeekends}
        />

        <SettingsToggle
          title="Evenings & nights"
          description="You can take urgent night-time jobs."
          value={nights}
          onChange={setNights}
        />

        <ButtonInstance
          label="Save availability"
          buttonColor="primary"
          customClass="w-full mt-8"
          clickEvt={() => {}}
        />
      </ScrollView>
    </View>
  );
}
