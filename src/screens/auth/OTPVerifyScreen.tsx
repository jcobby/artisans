import React from "react";
import { Text, View } from "react-native";
import { Title } from "../../components/typography";
import { OtpInput } from "../../components/inputs";
import { ButtonInstance } from "../../components/buttons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Colors } from "../../theme/colors";
import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "../../../hooks/auth.hooks";

type OTPRouteParams = {
  role?: "customer" | "artisan";
  phone?: string;
};

export default function OTPVerifyScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const [otp, setOtp] = React.useState("");

  const params = (route.params || {}) as OTPRouteParams;
  const effectiveRole: "customer" | "artisan" = params.role || "customer";

  const mutation = useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => {
      // After a successful OTP verification, redirect to login.
      navigation.navigate("Login");
    },
  });

  const handleSubmit = () => {
    const phone = params.phone;

    if (!phone) {
      console.log("Missing phone number for OTP verification.");
      return;
    }

    // Require full 6-digit OTP as per backend contract.
    if (!otp || otp.length < 6) {
      // Simple guard; you could surface validation UI here later.
      return;
    }

    mutation.mutate({ phone, otp });
  };

  return (
    <View className="flex-1">
      <View className="bg items-center justify-center pt-20 px-10 mb-10">
        <Title type="h3" content="Authentication" />
      </View>

      {/* text explaining things */}
      <View className="px-10">
        <Text className=" mt-2 mb-6">
          An OTP has been sent to your phone SMS. Please enter the OTP below to
          verify your account.
        </Text>

        <OtpInput length={6} onChangeOTP={setOtp} />
        {/* resend code */}
        <Text
          className="text-center mt- text-blue-500"
          style={{ color: Colors.primary }}
        >
          Resend Code
        </Text>
        <ButtonInstance
          label="Submit"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={handleSubmit}
        />
      </View>
    </View>
  );
}
