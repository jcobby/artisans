import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import CustomerStack from "./CustomerStack";
import ArtisanTabNavigator from "./ArtisanTabNavigator";
import { useAuth } from "../context/AuthContext";

export default function AppNavigator() {
  const { isLoading, userRole, authenticated } = useAuth();

  if (isLoading) return null; // or Splash screen

  return (
    <NavigationContainer>
      {!authenticated ? (
        // <AuthStack />
                <CustomerStack />

      ) : userRole === "customer" ? (
        <CustomerStack />
      ) : (
        <ArtisanTabNavigator />
      )}
    </NavigationContainer>
  );
}