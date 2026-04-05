import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import Header, { ConfirmModal } from "../../components/ui";
import { CheckboxInput } from "../../components/inputs";
import { ButtonInstance } from "../../components/buttons";

const MOCK_SERVICES = [
  { id: "1", name: "Electrical repairs" },
  { id: "2", name: "Installations" },
  { id: "3", name: "Maintenance checks" },
  { id: "4", name: "Emergency call-outs" },
];

export default function SetServicesScreen() {
  const [selected, setSelected] = useState<string[]>(["1"]);
  const [showSaved, setShowSaved] = useState(false);

  const toggleService = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleSave = () => {
    // In a real app, send `selected` to backend.
    setShowSaved(true);
  };

  return (
    <View className="flex-1 bg-white">
      <Header title="Services you offer" showBack />

      <ScrollView className="px-5 pt-4" contentContainerStyle={{ paddingBottom: 32 }}>
        <Text className="text-sm text-gray-600 mb-4">
          Choose the services you want customers to see on your profile. You
          can update this anytime.
        </Text>

        {MOCK_SERVICES.map((svc) => (
          <View key={svc.id} className="mb-1">
            <CheckboxInput
              label={svc.name}
              value={selected.includes(svc.id)}
              onValueChange={() => toggleService(svc.id)}
            />
          </View>
        ))}

        <ButtonInstance
          label="Save services"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={handleSave}
        />
      </ScrollView>

      <ConfirmModal
        visible={showSaved}
        title="Services updated"
        message="Your services have been saved. Customers will now see these on your profile."
        onCancel={() => setShowSaved(false)}
        onConfirm={() => setShowSaved(false)}
      />
    </View>
  );
}
