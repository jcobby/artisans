import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Tabs */
import ArtisanTabNavigator from "./ArtisanTabNavigator";

/* Artisan screens (non-tab) */
import CompleteProfileScreen from "../screens/artisan/CompleteProfileScreen";
import SetServicesScreen from "../screens/artisan/SetServicesScreen";
import SetAvailabilityScreen from "../screens/artisan/SetAvailabilityScreen";
import IncomingJobsScreen from "../screens/artisan/IncomingJobsScreen";
import JobDetailsScreen from "../screens/artisan/JobDetailsScreen";

const Stack = createNativeStackNavigator();

export default function ArtisanStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom tabs */}
      <Stack.Screen
        name="ArtisanTabs"
        component={ArtisanTabNavigator}
      />

      {/* Profile setup */}
      <Stack.Screen
        name="CompleteProfile"
        component={CompleteProfileScreen}
      />
      <Stack.Screen
        name="SetServices"
        component={SetServicesScreen}
      />
      <Stack.Screen
        name="SetAvailability"
        component={SetAvailabilityScreen}
      />

      {/* Jobs flow */}
      <Stack.Screen
        name="IncomingJobs"
        component={IncomingJobsScreen}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetailsScreen}
      />
    </Stack.Navigator>
  );
}
