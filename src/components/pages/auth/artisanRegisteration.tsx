import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useAuth } from "../../../context/AuthContext";
import { AltRegularInput, CheckboxInput, SelectInput } from "../../inputs";
import { ButtonInstance } from "../../buttons";
import Header from "../../ui";
import { artisanRegisterSchema } from "../../../../schema/auth.schema";
import { registerArtisan } from "../../../../hooks/auth.hooks";

export default function ArtisanRegisteration() {
  const navigation = useNavigation<any>();
  const { setUserRole, setauthenticated } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(artisanRegisterSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      profession: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const mutation = useMutation({
    mutationFn: registerArtisan,
    onSuccess: async (data) => {
      // Successful artisan registration should go through OTP verification
      try {
        setUserRole("artisan");
        await AsyncStorage.setItem("userRole", "artisan");
      } catch (error) {
        console.log("Error persisting artisan role:", error);
      }

      navigation.navigate("OTPVerification", {
        role: "artisan",
        phone: (data as any)?.phone ?? undefined,
      });
    },
    onError: (error: any) => {
      console.log("Artisan registration error:", error?.response?.data);
    },
  });

  const onSubmit = (data: any) => {
    const payload = {
      name: data.fullName,
      phone: data.phone,
      email: data.email,
      password: data.password,
      profession: data.profession,
    };

    mutation.mutate(payload);
  };

  return (
    <>
      <Header
        title="Artisan Registration"
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
                <Text className="text-red-500">
                  {errors.fullName.message}
                </Text>
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

        {/* PROFESSION */}
        <Controller
          control={control}
          name="profession"
          render={({ field: { onChange, value } }) => (
            <>
              <SelectInput
                label="Profession"
                value={value}
                options={[
                  { label: "Carpenter", value: "Carpenter" },
                  { label: "Electrician", value: "Electrician" },
                ]}
                onChange={onChange}
              />
              {errors.profession && (
                <Text className="text-red-500">
                  {errors.profession.message}
                </Text>
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
                <Text className="text-red-500">
                  {errors.password.message}
                </Text>
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
                onValueChange={() => onChange(!value)}
                label="By clicking ‘Sign Up’, you agree to Craftly's terms and conditions guiding the use of this app."
              />
              {errors.acceptTerms && (
                <Text className="text-red-500">
                  {errors.acceptTerms.message}
                </Text>
              )}
            </View>
          )}
        />

        {/* SUBMIT */}
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