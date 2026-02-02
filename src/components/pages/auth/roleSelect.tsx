import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header, { UserInfoRow } from "../../ui";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../typography";

export default function RoleSelectPage() {
  // Navigation hook
  const navigation = useNavigation<any>();

  //
  return (
    <View className="flex-1">
      <Header
        title="Create Account"
        rightLabel="Skip"
        rightIcon="arrow-forward"
        onRightPress={() => navigation.navigate("Login")}
      />
      <View className="bg items-start justify-center pt-20 px-10 mb-10">
        <Image
          source={require("../../../../assets/images/logo2.png")}
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
      </View>

      {/* sign up title */}
      <View className="px-10">
        <Title type="h3" content="Sign up" />

        <Text className="text-gray-600 mt-2 mb-6">
          Sign up to get premium service from Kwafters at a low rate and enjoy
          exclusive offers as a Kwafters{" "}
        </Text>

        <View className="w-full flex-1 flex-row">

        {/* Customer Role */}
        <TouchableOpacity
          className="bg-white rounded-lg p-5 mb-4 items-center shadow-md w-full mr-2"
          onPress={() => navigation.navigate("CustomerRegister")}
        >
         <UserInfoRow image="../../../../assets/images/logo2.png" name="Sign Up as Client"/>
          
        </TouchableOpacity>
        {/* Artisan Role */}
        <TouchableOpacity
          className="bg-white rounded-lg p-5 flex-row items-center shadow-md w-full"
          onPress={() => navigation.navigate("ArtisanRegister")}
        >
                  <UserInfoRow image="../../../../assets/images/logo2.png" name="Sign Up as Client"/>

        </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
