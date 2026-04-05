import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ReviewCard, StatItem } from "../../components/ui";

type RouteParams = {
  fromCustomer?: boolean;
};

export default function CompleteProfileScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { fromCustomer } = (route.params || {}) as RouteParams;

  const handleBookNow = () => {
    if (fromCustomer) {
      navigation.navigate("RequestService" as never);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center px-4 pt-14 pb-4">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} />
            <Text className="ml-4 text-base">Back</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View className="items-center px-6">
          {/* Avatar */}
          <View className="relative">
            <Image
              source={require("../../../assets/images/sportsCar.jpg")}
              style={{ width: 64, height: 64, borderRadius: 32 }}
              resizeMode="cover"
            />

            {/* Verified Badge */}
            <View className="absolute bottom-2 right-2 bg-green-500 p-1 rounded-full">
              <Ionicons name="checkmark" size={14} color="white" />
            </View>
          </View>

          {/* Name */}
          <Text className="text-xl font-semibold mt-4">
            Abiodun Taiwo
          </Text>

          {/* Role */}
          <Text className="text-gray-500 text-sm mt-1">
            Pro Electrician
          </Text>

          {/* Status */}
          <View className="flex-row items-center mt-2">
            <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
            <Text className="text-green-600 text-sm">
              Open to work
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="flex-row mt-4 space-x-4">
            <TouchableOpacity className="bg-green-100 p-4 rounded-full">
              <Feather name="phone" size={20} color="#16a34a" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-green-100 p-4 rounded-full">
              <Feather name="message-circle" size={20} color="#16a34a" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between px-10 mt-8">
          <StatItem value="54+" label="Hours" />
          <StatItem value="30+" label="Customers" />
          <StatItem value="5" label="Badges" />
          <StatItem value="5+" label="Star" />
        </View>

        {/* Reviews */}
        <View className="px-6 mt-8">
          <View className="flex-row justify-between items-center">
            <Text className="text-base font-semibold">
              Reviews & Ratings
            </Text>
            <Text className="text-green-600 text-sm">
              View all
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4"
          >
            <ReviewCard source={require("../../../assets/images/sportsCar.jpg")}/>
            <ReviewCard source={require("../../../assets/images/sportsCar.jpg")}/>
          </ScrollView>
        </View>

        {/* Bottom Button */}
        <View className="px-6 mt-8 mb-10">
          <TouchableOpacity
            className="bg-green-700 py-4 rounded-xl items-center"
            onPress={handleBookNow}
            disabled={!fromCustomer}
          >
            <Text className="text-white font-semibold text-base">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
