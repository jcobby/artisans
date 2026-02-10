import React, { useState } from "react";
import { Text, View } from "react-native";
import CustomModal from "../../../modals";
import SearchInput from "../../../inputs";
import { UserInfoCol, InfoRow } from "../../../ui";
import MapPicker from "./mapScreen";

export default function CustomerHome() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("2");

  const addresses = [
    {
      id: "1",
      title: "Current location",
      subtitle: "Santana Road",
      icon: "navigate-outline",
    },
    {
      id: "2",
      title: "Onyankle Street",
      subtitle: "Accra",
      icon: "location-outline",
    },
    {
      id: "3",
      title: "McCarthy Hill",
      subtitle: "Gbawe",
      icon: "location-outline",
    },
  ];

  return (
    <View className="flex-1">
      {/* <CustomModal
        closeModal={() => {}}
        showModal={false}
        size="full"
        modalStyles={`h-full`}
        modalTitle="Job Site Location"
      >
        <View>
          <Text>Modal Content</Text>
        </View>
        <SearchInput
          value="hi"
          onChangeText={() => {}}
          placeholder="Enter a new address"
        />


        <InfoRow
          iconName="map-outline"
          iconBgColor="#DCFCE7"
          iconColor="#16A34A"
          title="Choose on map"
          onPress={() => console.log("Open map")}
        />


        <View className="mt-2">
          {addresses.map((item) => (
            <InfoRow
              key={item.id}
              iconName={item.icon as any}
              title={item.title}
              subtitle={item.subtitle}
              selected={selectedId === item.id}
              onPress={() => setSelectedId(item.id)}
            />
          ))}
        </View>
      </CustomModal>
      <CustomModal
        closeModal={() => {}}
        showModal={true}
        size="full"
        modalStyles={`h-full`}
        modalTitle="Artisan Details"
      >
        <MapPicker onSelectLocation={(coords) => console.log(coords)} />
      </CustomModal> */}
       <MapPicker onSelectLocation={(coords) => console.log(coords)} />
    </View>
  );
}
