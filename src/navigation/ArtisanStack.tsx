import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Tabs */
import ArtisanTabNavigator from "./ArtisanTabNavigator";

/* Artisan screens (non-tab) */
import CompleteProfileScreen from "../screens/artisan/CompleteProfileScreen";
import SetServicesScreen from "../screens/artisan/SetServicesScreen";
import SetAvailabilityScreen from "../screens/artisan/SetAvailabilityScreen";
import IncomingJobsScreen from "../screens/artisan/IncomingJobsScreen";
import JobDetailsScreen from "../screens/artisan/JobDetailsScreen";
import SearchArtisanScreen from "../screens/customer/SearchArtisanScreen";
import SearchResultsScreen from "../screens/global/SearchResultsScreen";
import ChatTextScreen from "../screens/artisan/ChatTextScreen";
import CallScreen from "../screens/artisan/CallScreen";
import RequestServiceScreen from "../screens/customer/RequestServiceScreen";

const Stack = createNativeStackNavigator();

export default function ArtisanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom tabs */}
      <Stack.Screen name="ArtisanTabs" component={ArtisanTabNavigator} />

      <Stack.Screen name="SearchArtisan" component={SearchArtisanScreen} />

      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />

      {/* Profile setup / shared detail */}
      <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
      <Stack.Screen name="RequestService" component={RequestServiceScreen} />

      <Stack.Screen name="ChatText" component={ChatTextScreen} />

      <Stack.Screen name="CallScreen" component={CallScreen} />

      <Stack.Screen name="SetServices" component={SetServicesScreen} />

      <Stack.Screen name="SetAvailability" component={SetAvailabilityScreen} />

      {/* Jobs flow */}
      <Stack.Screen name="IncomingJobs" component={IncomingJobsScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
    </Stack.Navigator>
  );
}
