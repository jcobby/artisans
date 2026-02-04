import React, { useState } from "react";
import {
  View,
} from "react-native";
import LoginContainer from "../../components/pages/auth/login";

export default function LoginScreen() {

  return (
    <View className="flex-1 ">
      <LoginContainer />
    </View>
  );
}
