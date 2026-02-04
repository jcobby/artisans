import React from "react";
import { Text, View } from "react-native";
import { Title } from "../../components/typography";
import { OtpInput } from "../../components/inputs";
import { ButtonInstance } from "../../components/buttons";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../theme/colors";

export default function OTPVerifyScreen() {
  const navigation = useNavigation<any>();

  const [otp, setOtp] = React.useState("");
  const { userRole, setUserRole, authenticated, setauthenticated } = useAuth();

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

        <OtpInput length={4} onChangeOTP={setOtp} />
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
          clickEvt={() => {
            setUserRole("customer");
            setauthenticated(true);
            navigation.navigate("CustomerTabs", {
              screen: "Home",
            });
          }}
        />
      </View>
    </View>
  );
}
