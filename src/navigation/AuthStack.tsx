import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Screens */
import SplashScreen from "../screens/auth/SplashScreen";
import RoleSelectScreen from "../screens/auth/RoleSelectScreen";
import CustomerRegisterScreen from "../screens/auth/CustomerRegisterScreen";
import ArtisanRegisterScreen from "../screens/auth/ArtisanRegisterScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OTPVerifyScreen from "../screens/auth/OTPVerifyScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false,
      contentStyle: { backgroundColor: "#fff" }
     }}>
      {/* Splash */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      {/* Role selection */}
      <Stack.Screen
        name="RoleSelect"
        component={RoleSelectScreen}
      />

      {/* Registration */}
      <Stack.Screen
        name="CustomerRegister"
        component={CustomerRegisterScreen}
      />
      <Stack.Screen
        name="ArtisanRegister"
        component={ArtisanRegisterScreen}
      />

{/* Authentication screen */}
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerifyScreen}
      />

      {/* Login */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
