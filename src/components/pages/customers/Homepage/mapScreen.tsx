import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

type MapPickerProps = {
  onSelectLocation: (coords: { latitude: number; longitude: number }) => void;
  onClose?: () => void;
};

export default function MapPicker({ onSelectLocation, onClose }: MapPickerProps) {
  const [region, setRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState(true);
  const [addressText, setAddressText] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      setLoading(false);
    })();
  }, []);

  // keep map center as selected point
  const handleRegionChange = (r: Region) => {
    setRegion(r);
  };

  const confirmLocation = () => {
    if (!region) return;
    onSelectLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  if (loading || !region) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text>Loading map...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      {/* MAP */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        onRegionChangeComplete={handleRegionChange}
        showsUserLocation
      />

      {/* CENTER PIN (fixed) */}
      <View className="absolute inset-0 justify-center items-center pointer-events-none">
        <Ionicons name="location-sharp" size={42} color="#16a34a" />
      </View>

      {/* CLOSE BUTTON */}
      <TouchableOpacity
        onPress={onClose}
        className="absolute top-16 left-4 bg-black/80 w-10 h-10 rounded-full items-center justify-center"
      >
        <Ionicons name="close" size={20} color="white" />
      </TouchableOpacity>

      {/* BOTTOM SHEET */}
      <View className="absolute bottom-0 left-0 right-0 bg-black rounded-t-3xl px-5 pt-5 pb-8">
        <Text className="text-white text-xl font-bold mb-3">
          Set delivery address
        </Text>

        {/* SEARCH BOX */}
        <View className="bg-neutral-800 rounded-xl px-4 py-3 mb-3 flex-row items-center">
          <Ionicons name="search" size={18} color="#9ca3af" />
          <TextInput
            placeholder="Search address"
            placeholderTextColor="#9ca3af"
            value={addressText}
            onChangeText={setAddressText}
            className="ml-3 text-white flex-1"
          />
        </View>

        <Text className="text-neutral-400 text-sm mb-5">
          Move the pin to your building entrance to help your courier find you
          faster
        </Text>

        {/* CONFIRM BUTTON */}
        <TouchableOpacity
          onPress={confirmLocation}
          className="bg-green-600 py-4 rounded-xl items-center"
        >
          <Text className="text-white font-bold text-base">
            Set address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
