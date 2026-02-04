import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Tabs */
import CustomerTabNavigator from "./CustomerTabNavigator";

/* Customer screens (non-tab) */
import SearchArtisanScreen from "../screens/customer/SearchArtisanScreen";
import ArtisanProfileScreen from "../screens/customer/CustomerArtisanProfileScreen";
import RequestServiceScreen from "../screens/customer/RequestServiceScreen";
import BookingStatusScreen from "../screens/customer/BookingStatusScreen";

const Stack = createNativeStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom tabs */}
      <Stack.Screen
        name="CustomerTabs"
        component={CustomerTabNavigator}
      />

      {/* Detail / Flow screens */}
      <Stack.Screen
        name="SearchArtisan"
        component={SearchArtisanScreen}
      />

      <Stack.Screen
        name="ArtisanProfile"
        component={ArtisanProfileScreen}
      />

      <Stack.Screen
        name="RequestService"
        component={RequestServiceScreen}
      />

      <Stack.Screen
        name="BookingStatus"
        component={BookingStatusScreen}
      />
    </Stack.Navigator>
  );
}
