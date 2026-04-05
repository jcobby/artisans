import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Tabs */
import CustomerTabNavigator from "./CustomerTabNavigator";

/* Customer screens (non-tab) */
import SearchArtisanScreen from "../screens/customer/SearchArtisanScreen";
import RequestServiceScreen from "../screens/customer/RequestServiceScreen";
import BookingStatusScreen from "../screens/customer/BookingStatusScreen";
import SearchResultsScreen from "../screens/global/SearchResultsScreen";
import CompleteProfileScreen from "../screens/artisan/CompleteProfileScreen";

const Stack = createNativeStackNavigator();

export default function CustomerStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom tabs */}
      <Stack.Screen name="CustomerTabs" component={CustomerTabNavigator} />

      {/* Search flow */}
      <Stack.Screen name="SearchArtisan" component={SearchArtisanScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />

      {/* Artisan profile detail (reusing the polished profile screen) */}
      <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />

      {/* Booking flow */}
      <Stack.Screen name="RequestService" component={RequestServiceScreen} />
      <Stack.Screen name="BookingStatus" component={BookingStatusScreen} />
    </Stack.Navigator>
  );
}
