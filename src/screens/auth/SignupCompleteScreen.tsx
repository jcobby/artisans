import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Title } from "../../components/typography";
import { ButtonInstance } from "../../components/buttons";
import { useAuth } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RouteParams = {
  role?: "customer" | "artisan";
};

export default function SignupCompleteScreen() {
  const route = useRoute();
  const { setUserRole, setauthenticated } = useAuth();

  const { role = "customer" } = (route.params || {}) as RouteParams;

  const handleContinue = async () => {
    try {
      setUserRole(role);
      setauthenticated(true);

      await AsyncStorage.setItem("authToken", "signup-complete-token");
      await AsyncStorage.setItem("userRole", role);
    } catch (error) {
      console.log("Error finalizing signup:", error);
    }
    // AppNavigator will now switch to the appropriate stack.
  };

  return (
    <View className="flex-1 items-center justify-center px-10 bg-white">
      <Title type="h3" content="You're all set" />

      <Text className="mt-3 mb-6 text-center text-gray-600">
        Your {role === "artisan" ? "artisan" : "customer"} account has been
        created successfully. You can now start using Craftly.
      </Text>

      <ButtonInstance
        label="Continue to app"
        buttonColor="primary"
        customClass="w-full mt-2"
        clickEvt={handleContinue}
      />
    </View>
  );
}

