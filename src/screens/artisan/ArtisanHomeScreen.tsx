import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-reanimated-carousel";
import SearchInput from "../../components/inputs";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../theme/colors";
import { ButtonInstance } from "../../components/buttons";

export default function ArtisanHomeScreen() {
  const { width } = Dimensions.get("window");
  const navigation = useNavigation();

  const data = [1, 2, 3, 4, 5];

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >


      <View className="mx-5 gap-6">
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
            Welcome John,
          </Text>
          <View
            style={{
              borderRadius: 999,
              backgroundColor: "#bfdbfe",
              padding: 8,
            }}
          >
            <Ionicons name="notifications-off" size={24} color="black" />
          </View>
        </View>

        {/* Search (read-only entry – navigates to search screen) */}
        <SearchInput
          value=""
          onChangeText={() => {}}
          placeholder="Search for jobs or customers"
          onFocus={() => navigation.navigate("SearchArtisan" as never)}
        />

        <ButtonInstance
          label="View incoming jobs"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={() => {
            navigation.navigate("IncomingJobs" as never);
          }}
        />

        {/* First carousel: 1 card */}
        <Carousel
          loop
          pagingEnabled
          width={CAROUSEL_WIDTH}
          height={200}
          data={data}
          autoPlay
          autoPlayInterval={4000}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                marginHorizontal: 2,
                backgroundColor: "#166534",
                borderRadius: 16,
                justifyContent: "center",
                padding: 20,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 22, fontWeight: "bold" }}
              >
                Earn Extra Cash
              </Text>
              <Text style={{ color: "white", marginTop: 8 }}>
                Work with people in your free time
              </Text>
            </View>
          )}
        />

        {/* Third carousel: 3 cards */}
        <View className="">
          <Text className="font-bold text-xl justify-center pb-5">
            Categories
          </Text>
          <Carousel
            loop={false}
            snapEnabled
            pagingEnabled={false}
            overscrollEnabled={false}
            width={ITEM3_WIDTH}
            height={110}
            data={data}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,
                  marginRight: index !== data.length - 1 ? GAP3 : 0,
                  backgroundColor: "#dbeafe",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>{item}</Text>
              </View>
            )}
          />
        </View>

        <View className="pt- ">
          {/* Second carousel: 2 cards */}
          <View className="flex flex-row justify-between items-center pb-5">
            <Text className="font-bold text-xl justify-center">
              {" "}
              Top Kawfters in your field
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("IncomingJobs" as never)}
            >
              {/* style text color */}
              <Text className="" style={{ color: Colors.primary }}>
                View incoming jobs
              </Text>
            </TouchableOpacity>
          </View>
          <Carousel
            loop={false}
            snapEnabled
            width={ITEM2_WIDTH}
            overscrollEnabled={false}
            height={160}
            data={data}
            style={{ width: "100%" }}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#e5e7eb",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 16,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
