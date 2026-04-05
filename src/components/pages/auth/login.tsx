import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import { Title } from "../../typography";
import { AltRegularInput } from "../../inputs";
import { ButtonInstance } from "../../buttons";
import { Colors } from "../../../theme/colors";
import { useAuth } from "../../../context/AuthContext";
import Header from "../../ui";

import { loginCustomer } from "../../../../hooks/auth.hooks";
import { loginSchema } from "../../../../schema/auth.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginContainer() {
  const navigation = useNavigation<any>();
  const { setUserRole, setauthenticated } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginCustomer,
    onSuccess: async (data) => {
      // Persist minimal auth state so the app can restore after relaunch.
      try {
        setUserRole("customer");
        setauthenticated(true);

        // Best-effort token persistence – falls back to a placeholder if backend shape differs.
        const token =
          (data as any)?.token ||
          (data as any)?.accessToken ||
          "mock-customer-token";

        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userRole", "customer");
      } catch (error) {
        console.log("Error persisting login state:", error);
      }

      navigation.navigate("CustomerTabs");
    },
    onError: (error: any) => {
      if (error?.response?.status === 403) {
        console.log("Phone number not verified. Please verify via OTP first.");
      } else {
        console.log("Login error:", error);
      }
    },
  });

  const onSubmit = (data: any) => {
    const payload = {
      phone: data.phone,
      password: data.password,
      // role: "customer",
    };
console.log(payload);
    mutation.mutate(payload);
  };

  return (
    <>
      <Header
        showBack={true}
        rightLabel="Skip"
        rightIcon="arrow-forward"
        onRightPress={() => {
          setUserRole("customer");
          setauthenticated(true);
          navigation.navigate("CustomerTabs");
        }}
      />

      <View className="px-10 pt-20">
        <Title type="h3" content="Log In" />

        <Text className="mt-2 mb-6">
          Welcome back, login to continue enjoy professional services at a
          lower cost.
        </Text>

        {/* PHONE */}
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <AltRegularInput
              label="Phone Number"
              placeholder="Enter your phone number"
              value={value}
              onChangeVal={onChange}
              onBlur={onBlur}
              iconName="call-outline"
              error={error?.message}
            />
          )}
        />

        {/* PASSWORD */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
            <AltRegularInput
              label="Password"
              placeholder="Enter your password"
              value={value}
              onChangeVal={onChange}
              onBlur={onBlur}
              iconName="lock-closed-outline"
              isPassword={true}
              error={error?.message}
            />
          )}
        />

        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text className="mt-4" style={{ color: Colors.primary }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <ButtonInstance
          label={mutation.isPending ? "Logging in..." : "Submit"}
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
}