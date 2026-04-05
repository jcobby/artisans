import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import { useAuth } from "../../../context/AuthContext";
import { AltRegularInput, CheckboxInput } from "../../inputs";
import { ButtonInstance } from "../../buttons";
import Header from "../../ui";
import { customerRegisterSchema } from "../../../../schema/auth.schema";
import { registerCustomer } from "../../../../hooks/auth.hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CustomerRegistration() {
  const navigation = useNavigation<any>();
  const { setUserRole, setauthenticated } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerRegisterSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: registerCustomer,
    onSuccess: async (data) => {
      // After a successful registration, go through OTP verification
      try {
        // Pre-store the intended role so OTP screen can decide where to land
        setUserRole("customer");
        await AsyncStorage.setItem("userRole", "customer");
      } catch (error) {
        console.log("Error persisting customer role:", error);
      }

      navigation.navigate("OTPVerification", {
        role: "customer",
        phone: data?.phone ?? undefined,
      });
    },
    onError: (error: any) => {
      console.log("Registration error:", error?.response?.data);
    },
  });

  const onSubmit = (data: any) => {
    let payload = {
      name: data.fullName,
      phone: data.phone,
      email: data.email,
      password: data.password,
    };
    mutation.mutate(payload);
  };

  return (
    <>
      <Header
        title="Customer Registration"
        showBack={true}
        rightLabel="Skip"
        rightIcon="arrow-forward"
      />

      <View className="px-10 py-10">
        {/* FULL NAME */}
        <Controller
          control={control}
          name="fullName"
          render={({ field: { onChange, value } }) => (
            <>
              <AltRegularInput
                label="Full Name"
                placeholder="Enter your full name"
                value={value}
                onChangeVal={onChange}
                iconName="person-outline"
              />
              {errors.fullName && (
                <Text className="text-red-500">{errors.fullName.message}</Text>
              )}
            </>
          )}
        />

        {/* PHONE */}
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <>
              <AltRegularInput
                label="Phone Number"
                placeholder="Enter your phone number"
                value={value}
                onChangeVal={onChange}
                iconName="call-outline"
              />
              {errors.phone && (
                <Text className="text-red-500">{errors.phone.message}</Text>
              )}
            </>
          )}
        />

        {/* EMAIL */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <>
              <AltRegularInput
                label="Email Address"
                placeholder="Enter your email address"
                value={value}
                onChangeVal={onChange}
                iconName="mail-outline"
              />
              {errors.email && (
                <Text className="text-red-500">{errors.email.message}</Text>
              )}
            </>
          )}
        />

        {/* PASSWORD */}
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <>
              <AltRegularInput
                label="Password"
                placeholder="Enter your password"
                value={value}
                onChangeVal={onChange}
                iconName="lock-closed-outline"
                isPassword={true}
              />
              {errors.password && (
                <Text className="text-red-500">{errors.password.message}</Text>
              )}
            </>
          )}
        />

        {/* CONFIRM PASSWORD */}
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <>
              <AltRegularInput
                label="Confirm Password"
                placeholder="Re-enter your password"
                value={value}
                onChangeVal={onChange}
                iconName="lock-closed-outline"
                isPassword={true}
              />
              {errors.confirmPassword && (
                <Text className="text-red-500">
                  {errors.confirmPassword.message}
                </Text>
              )}
            </>
          )}
        />

        {/* TERMS */}
        <Controller
          control={control}
          name="acceptTerms"
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <View className="mt-4 mb-6">
              <CheckboxInput
                value={value}
                onValueChange={() => onChange(!value)} // ✅ FIXED
                label="By clicking ‘Sign Up’, you agree to Craftly's terms and conditions."
              />

              {errors.acceptTerms && (
                <Text className="text-red-500">
                  {errors.acceptTerms.message}
                </Text>
              )}
            </View>
          )}
        />

        <ButtonInstance
          label={mutation.isPending ? "Submitting..." : "Submit"}
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
}
