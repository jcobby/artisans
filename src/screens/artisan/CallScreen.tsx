import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CallScreen() {
  const [callState, setCallState] = useState<"calling" | "connected">(
    "calling"
  );
  const [seconds, setSeconds] = useState(0);
  const navigation = useNavigation<any>();

  // Simulate call connecting after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCallState("connected");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Timer when connected
  useEffect(() => {
    let interval: any;

    if (callState === "connected") {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [callState]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <View className="flex-1 bg-white justify-between px-6 pt-20 pb-16">
      
      {/* Top Content */}
      <View className="items-center">
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/women/44.jpg",
          }}
          className="w-44 h-44 rounded-full"
        />

        <Text className="text-2xl font-semibold mt-6">
          Joseph Aina
        </Text>

        {callState === "calling" ? (
          <Text className="text-gray-500 mt-2">
            Calling...
          </Text>
        ) : (
          <>
            <View className="flex-row items-center mt-2">
              <Text className="text-gray-600 mr-2">
                In call
              </Text>
              <View className="w-2 h-2 bg-green-500 rounded-full" />
            </View>

            <Text className="text-gray-500 mt-3">
              {formatTime()}
            </Text>
          </>
        )}
      </View>

      {/* Bottom Buttons */}
      <View className="flex-row justify-center items-center space-x-8">
        
        {/* Speaker / Audio */}
        <TouchableOpacity className="bg-gray-200 p-5 rounded-full">
          <Feather name="volume-2" size={22} color="#6b7280" />
        </TouchableOpacity>

        {/* End Call */}
        <TouchableOpacity
          className="bg-red-600 p-6 rounded-full"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="call" size={26} color="white" />
        </TouchableOpacity>

        {/* Mute */}
        <TouchableOpacity className="bg-gray-200 p-5 rounded-full">
          <Feather name="mic-off" size={22} color="#6b7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
