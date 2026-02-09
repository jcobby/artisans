import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
// import MapView, { Marker, MapPressEvent } from "react-native-maps";
// import * as Location from "expo-location";

type MapPickerProps = {
  onSelectLocation: (coords: { latitude: number; longitude: number }) => void;
};

export default function MapPicker({ onSelectLocation }: MapPickerProps) {
  const [region, setRegion] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();

  //     if (status !== "granted") {
  //       setLoading(false);
  //       return;
  //     }

  //     const location = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = location.coords;

  //     setRegion({
  //       latitude,
  //       longitude,
  //       latitudeDelta: 0.01,
  //       longitudeDelta: 0.01,
  //     });

  //     setLoading(false);
  //   })();
  // }, []);

  // const handleMapPress = (event: MapPressEvent) => {
  //   setSelectedLocation(event.nativeEvent.coordinate);
  // };

  // const confirmLocation = () => {
  //   if (selectedLocation) {
  //     onSelectLocation(selectedLocation);
  //   }
  // };

  // if (loading || !region) {
  //   return (
  //     <View className="flex-1 justify-center items-center">
  //       <ActivityIndicator size="large" />
  //       <Text>Loading map...</Text>
  //     </View>
  //   );
  // }

  return (
    <View className="flex-1">
      {/* <MapView
        style={{ flex: 1 }}
        initialRegion={region}
        showsUserLocation
        onPress={handleMapPress}
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>

      <View className="absolute bottom-6 left-4 right-4">
        <TouchableOpacity
          onPress={confirmLocation}
          className="bg-blue-600 p-4 rounded-xl items-center"
        >
          <Text className="text-white font-bold">Confirm Location</Text>
        </TouchableOpacity>
      </View> */}
      hi worlddi
    </View>
  );
}
