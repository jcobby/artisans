import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useApp } from "../../context/AppContext";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ phone: "", password: "" });
    const { theme, toggleTheme, notifications, toggleNotifications } = useApp();
    console.log("Current Theme:", theme);
    console.log("Notifications Enabled:", notifications);


  const validatePhone = (phoneNumber: string) => {
    // Basic phone validation - adjust regex based on your region
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phoneNumber.replace(/\s/g, ""));
  };

  const handleLogin = async () => {
    // Reset errors
    setErrors({ phone: "", password: "" });

    // Validation
    let hasError = false;

    if (!phone.trim()) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
      hasError = true;
    } else if (!validatePhone(phone)) {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
      hasError = true;
    }

    if (!password.trim()) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      hasError = true;
    } else if (password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
      hasError = true;
    }

    if (hasError) return;

    // Start loading
    setIsLoading(true);

    try {
      // TODO: Replace this with your actual API call
      // Example: const response = await loginAPI(phone, password);
      
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // If login successful, navigate to customer dashboard
      navigation.navigate("CustomerHome" as never);
    } catch (error) {
      // Handle login error
      setErrors((prev) => ({
        ...prev,
        password: "Invalid credentials. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 px-6 justify-center">
          {/* Header */}
          <View className="mb-10">
            <Text className="text-4xl font-bold text-gray-900 mb-2">
              Welcome Back
            </Text>
            <Text className="text-gray-600 text-base">
              Sign in to continue
            </Text>
          </View>

          {/* Phone Input */}
          <View className="mb-4">
            <Text className="text-gray-700 font-semibold mb-2">
              Phone Number
            </Text>
            <TextInput
              className={`border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-3 text-base text-gray-900`}
              placeholder="Enter your phone number"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => {
                setPhone(text);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              editable={!isLoading}
            />
            {errors.phone ? (
              <Text className="text-red-500 text-sm mt-1">{errors.phone}</Text>
            ) : null}
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <Text className="text-gray-700 font-semibold mb-2">Password</Text>
            <TextInput
              className={`border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-3 text-base text-gray-900`}
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (errors.password)
                  setErrors((prev) => ({ ...prev, password: "" }));
              }}
              editable={!isLoading}
            />
            {errors.password ? (
              <Text className="text-red-500 text-sm mt-1">
                {errors.password}
              </Text>
            ) : null}
          </View>

          {/* Forgot Password */}
          <TouchableOpacity
            className="self-end mb-6"
            onPress={() => {
              // TODO: Navigate to forgot password screen
              console.log("Forgot password pressed");
            }}
            disabled={isLoading}
          >
            <Text className="text-blue-600 font-semibold">
              Forgot Password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            className={`bg-blue-600 rounded-lg py-4 items-center ${
              isLoading ? "opacity-70" : ""
            }`}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white font-bold text-lg">Login</Text>
            )}
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                // TODO: Navigate to sign up screen
                console.log("Sign up pressed");
              }}
              disabled={isLoading}
            >
              <Text className="text-blue-600 font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}