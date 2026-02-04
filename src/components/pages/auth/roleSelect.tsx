import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header, { UserInfoRow } from "../../ui";
import { useNavigation } from "@react-navigation/native";
import { Title } from "../../typography";
import { ButtonInstance } from "../../buttons";
import { Colors } from "../../../theme/colors";

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

        <View className="w-full flex-row pb-20">
          {/* Customer Role */}
          <TouchableOpacity
            className="bg-white rounded-lg p-5 mb-4 items-center  mr-2 flex-1"
            onPress={() => navigation.navigate("CustomerRegister")}
            style={{ backgroundColor: Colors.light_i_Blue }}
          >
            <UserInfoRow
              showIcon={true}
              iconName="person"
              iconSize={30}
              iconBackgroundColor={Colors.light_ii_Blue}
              iconColor={Colors.light_ii_Blue}
              name="Sign Up as Client"
            />
            {/* <Text>hel world</Text> */}
          </TouchableOpacity>
          {/* Artisan Role */}
          <TouchableOpacity
            className="bg-white rounded-lg p-5 mb-4 items-center  mr-2 flex-1"
            onPress={() => {
              navigation.navigate("ArtisanRegister");
              console.log("Navigate to Artisan Register");
            }}
            style={{ backgroundColor: Colors.cream }}
          >
            <UserInfoRow
              showIcon={true}
              iconName="hammer"
              iconSize={30}
              iconBackgroundColor="#FCA5A5"
              name="Sign Up an Artisan"
            />
          </TouchableOpacity>
        </View>
        <View className=" flex-row items-center justify-center">
          <View className="h-px flex-1 bg-black my-3 " />
          <Text className="text-center mx-3">Or</Text>
          <View className="h-px flex-1 bg-black" />
        </View>

        <ButtonInstance
          label="Login"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}
