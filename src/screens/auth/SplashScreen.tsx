import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Animated, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

// For NativeWind v4, standard components already accept className.
// For Animated components, we use this simple approach:
const AnimatedView = Animated.createAnimatedComponent(View);

export default function SplashScreen({ onFinish }: any) {
  const [logoRotate] = useState(new Animated.Value(0));

  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("RoleSelect"); // 🔥 important
    }, 2500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <View className="flex-1 justify-center items-center">
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 250, height: 250, marginBottom: 20 }}
        resizeMode="contain"
      />
    </View>
  );
}
