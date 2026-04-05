import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomModal from "../../../modals";
import SearchInput from "../../../inputs";
import { UserInfoCol, InfoRow, ArtisanCard } from "../../../ui";
import MapPicker from "./mapScreen";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ButtonInstance } from "../../../buttons";
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "../../../../theme/colors";
import * as Location from "expo-location";

export default function CustomerHome() {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();

  // Mock data for categories
  const categories = [
    { id: "1", name: "Electrician", icon: "⚡" },
    { id: "2", name: "Plumber", icon: "🔧" },
    { id: "3", name: "Mechanic", icon: "🚗" },
    { id: "4", name: "Painter", icon: "🎨" },
    { id: "5", name: "Cleaner", icon: "🧹" },
    { id: "6", name: "Carpenter", icon: "🪵" },
  ];

  const [categoryIndex, setCategoryIndex] = useState(0);

  // Mock data for top artisans
  const topArtisans = [
    {
      id: "1",
      name: "Abiodun Taiwo",
      profession: "Electrician",
      rating: 4.8,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "2",
      name: "Grace Mensah",
      profession: "Plumber",
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: "3",
      name: "Kofi Asante",
      profession: "Mechanic",
      rating: 4.7,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  // Mock data for promotional banners
  const banners = [
    {
      id: "1",
      title: "Find Trusted Artisans",
      subtitle: "Get professional services at your doorstep",
      color: "#166534",
    },
    {
      id: "2",
      title: "Book Instantly",
      subtitle: "Schedule services in minutes",
      color: "#1e40af",
    },
    {
      id: "3",
      title: "Quality Guaranteed",
      subtitle: "Verified artisans with ratings",
      color: "#dc2626",
    },
  ];

  // Hardcoded widths for carousels
  const SCREEN_PADDING = 16;

  // 1st carousel: 1 card visible
  const CAROUSEL1_WIDTH = width - SCREEN_PADDING * 2;
  const ITEM1_WIDTH = CAROUSEL1_WIDTH;

  // 2nd carousel: 2 cards visible
  const GAP2 = 16;
  const CAROUSEL2_WIDTH = width - SCREEN_PADDING * 2;
  const ITEM2_WIDTH = (CAROUSEL2_WIDTH - GAP2) / 2;

  // 3rd carousel: 3 cards visible
  const CAROUSEL3_WIDTH = width - SCREEN_PADDING * 2;
  const GAP3 = 12;
  const VISIBLE3 = 3;

  const ITEM3_WIDTH = (CAROUSEL3_WIDTH - GAP3 * (VISIBLE3 - 1)) / VISIBLE3;

  const CAROUSEL_WIDTH = width - 40;

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("2");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showMapPicker, setShowMapPicker] = useState(false);

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

  // Get current selected location
  const currentLocation = addresses.find((addr) => addr.id === selectedId);

  const handleMapLocationSelect = async (coords: {
    latitude: number;
    longitude: number;
  }) => {
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      if (address && address.length > 0) {
        const locationData = address[0];
        const newAddress = {
          id: `map_${Date.now()}`,
          title:
            locationData.name ||
            `${locationData.street || ""} ${locationData.streetNumber || ""}`.trim() ||
            "Selected Location",
          subtitle:
            `${locationData.city || ""}, ${locationData.region || ""}`.trim() ||
            "Unknown Area",
          icon: "location-outline",
        };

        // Add to addresses list and select it
        addresses.push(newAddress);
        setSelectedId(newAddress.id);
      }
    } catch (error) {
      console.error("Error reverse geocoding:", error);
      // Fallback: create a basic address
      const newAddress = {
        id: `map_${Date.now()}`,
        title: "Selected Location",
        subtitle: `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`,
        icon: "location-outline",
      };
      addresses.push(newAddress);
      setSelectedId(newAddress.id);
    }

    setShowMapPicker(false);
    setShowLocationModal(false);
  };


    const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: -35 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-5 gap-6 pb-4 ">
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 0,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Welcome back!
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 999,
                backgroundColor: "#bfdbfe",
                padding: 8,
              }}
              onPress={() => navigation.navigate("CustomerProfile" as never)}
            >
              <Ionicons name="person-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Current Location Display */}
          <View className="flex flex-row items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
            <View className="flex flex-row items-center flex-1">
              <Ionicons name="location-outline" size={20} color="#6b7280" />
              <View className="ml-3">
                <Text className="text-sm text-gray-500">Current Location</Text>
                <Text className="font-semibold text-gray-900">
                  {currentLocation?.title}
                </Text>
                <Text className="text-sm text-gray-600">
                  {currentLocation?.subtitle}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-200"
              onPress={() => {setShowLocationModal(true); console.log("Location modal shown", showLocationModal);}}
            >
              <Text className="text-blue-600 font-medium">Change</Text>
            </TouchableOpacity>
          </View>

          {/* Search (read-only entry – navigates to search screen) */}
          <SearchInput
            value=""
            onChangeText={() => {}}
            placeholder="Search for artisans or services"
            onFocus={() => navigation.navigate("SearchArtisan" as never)}
          />

          {/* Promotional Banner Carousel */}
          <Carousel
            loop
            pagingEnabled
            width={CAROUSEL_WIDTH}
            height={180}
            data={banners}
            autoPlay
            autoPlayInterval={5000}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 2,
                  backgroundColor: item.color,
                  borderRadius: 16,
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: "white", marginTop: 8, fontSize: 16 }}>
                  {item.subtitle}
                </Text>
              </View>
            )}
          />

          {/* Categories Carousel */}
          <View className="">
            <View className="flex flex-row justify-between items-center pb-5">
              <Text className="font-bold text-xl">Popular Services</Text>
              <TouchableOpacity onPress={() => setShowServicesModal(true)}>
                <Text
                  className=""
                  style={{ color: Colors.primary, fontWeight: "600" }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <Carousel
              loop={false}
              snapEnabled
              pagingEnabled={false}
              overscrollEnabled={false}
              width={ITEM3_WIDTH}
              height={110}
              data={categories}
              style={{ width: "100%" }}
              onProgressChange={(_, absoluteProgress) => {
                setCategoryIndex(Math.round(absoluteProgress));
              }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    marginRight: index !== categories.length - 1 ? GAP3 : 0,
                    backgroundColor: "#dbeafe",
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() =>
                    navigation.navigate("SearchResults" as never, {
                      category: item.name,
                    })
                  }
                >
                  <Text style={{ fontSize: 24, marginBottom: 4 }}>
                    {item.icon}
                  </Text>
                  <Text style={{ fontWeight: "600", textAlign: "center" }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
            {/* Pagination Dots */}
            <View className="flex flex-row justify-center items-center gap-1.5 mt-3">
              {categories.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: index === categoryIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor:
                      index === categoryIndex ? Colors.primary : "#d1d5db",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </View>
          </View>

          {/* Top Artisans Carousel */}
          <View className="pt- ">
            <View className="flex flex-row justify-between items-center pb-5">
              <Text className="font-bold text-xl justify-center">
                Top Rated Artisans
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchResults" as never)}
              >
                <Text className="" style={{ color: Colors.primary }}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <Carousel
              loop={false}
              snapEnabled
              width={ITEM2_WIDTH}
              overscrollEnabled={false}
              height={160}
              data={topArtisans}
              style={{ width: "100%" }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    backgroundColor: "#ffffff",
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 16,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                  }}
                  onPress={() =>
                    navigation.navigate("CompleteProfile" as never, {
                      artisanId: item.id,
                    })
                  }
                >
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "#666", marginTop: 4 }}>
                    {item.profession}
                  </Text>
                  <Text style={{ color: "#f59e0b", marginTop: 4 }}>
                    ⭐ {item.rating}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Quick Actions */}
          <View className="bg-white rounded-xl p-4 border border-gray-200">
            <Text className="font-bold text-lg mb-4">Quick Actions</Text>
            <View className="flex-row justify-between">
              <TouchableOpacity
                className="items-center"
                onPress={() => navigation.navigate("CustomerBookings" as never)}
              >
                <View className="bg-blue-100 p-3 rounded-full mb-2">
                  <Ionicons name="list-outline" size={24} color="#3b82f6" />
                </View>
                <Text className="text-sm">My Bookings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="items-center"
                onPress={() => navigation.navigate("CustomerChat" as never)}
              >
                <View className="bg-green-100 p-3 rounded-full mb-2">
                  <Ionicons
                    name="chatbubble-outline"
                    size={24}
                    color="#10b981"
                  />
                </View>
                <Text className="text-sm">Messages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="items-center"
                onPress={() => setShowLocationModal(true)}
              >
                <View className="bg-purple-100 p-3 rounded-full mb-2">
                  <Ionicons name="location-outline" size={24} color="#8b5cf6" />
                </View>
                <Text className="text-sm">Change Location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      



 
<CustomModal
  visible={showLocationModal}
  setVisible={setShowLocationModal}
  modalTitle={showMapPicker ? "Map Location Picker" : "Select Location"}
  size="large"
  closeModal={() => setShowMapPicker(false)}
>
  {showMapPicker ? (
    // Map Picker View
      <MapPicker
          onSelectLocation={handleMapLocationSelect}
          onClose={() => setShowMapPicker(false)}
        />
  ) : (
    // Location Selection View
    <View>
      <SearchInput value="" onChangeText={() => {}} placeholder="Enter a new address" />
      <InfoRow
        iconName="map-outline"
        iconBgColor="#DCFCE7"
        iconColor="#16A34A"
        title="Choose on map"
        onPress={() => setShowMapPicker(true)}  // Just switches view
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
      <ButtonInstance
        label="Confirm Location"
        buttonColor="primary"
        customClass="w-full mt-4"
        clickEvt={() => setShowLocationModal(false)}
      />
    </View>
  )}
</CustomModal>
         <Text style={styles.title}>React Native Stacked Modal Example</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setFirstModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open First Modal</Text>
      </TouchableOpacity>

      {/* FIRST MODAL */}
      <Modal
        visible={firstModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setFirstModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>First Modal</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setSecondModalVisible(true)}
            >
              <Text style={styles.buttonText}>Open Second Modal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setFirstModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close First Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* SECOND MODAL */}
      <Modal
        visible={secondModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSecondModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Second Modal</Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSecondModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close Second Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* All Services Modal */}
      <CustomModal
        closeModal={() => setShowServicesModal(false)}
        showModal={false}
        size="full"
        modalStyles={`h-full`}
        modalTitle="All Services"
        visible={showServicesModal}
        setVisible={setShowServicesModal}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView className="flex flex-wrap flex-row gap-3">
            {categories.map((service) => (
              <TouchableOpacity
                key={service.id}
                className="flex-1 items-center justify-center bg-blue-50 rounded-2xl py-6 border border-blue-200"
                style={{ minWidth: "45%" }}
                onPress={() => {
                  // setShowServicesModal(false);
                  // navigation.navigate("SearchResults" as never, {
                  //   category: service.name,
                  // });
                }}
              >
                <Text style={{ fontSize: 36, marginBottom: 8 }}>
                  {service.icon}
                </Text>
                <Text className="font-semibold text-center text-gray-800">
                  {service.name}
                </Text>
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        </ScrollView>
      </CustomModal>

      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  closeButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalBox: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});