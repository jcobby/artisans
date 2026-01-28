import { createNativeStackNavigator } from "@react-navigation/native-stack";

/* Auth */
import SplashScreen from "../screens/auth/SplashScreen";
import RoleSelectScreen from "../screens/auth/RoleSelectScreen";
import CustomerRegisterScreen from "../screens/auth/CustomerRegisterScreen";
import ArtisanRegisterScreen from "../screens/auth/ArtisanRegisterScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OTPVerifyScreen from "../screens/auth/OTPVerifyScreen";

/* Customer */
import CustomerHomeScreen from "../screens/customer/CustomerHomeScreen";
import SearchArtisanScreen from "../screens/customer/SearchArtisanScreen";
import RequestServiceScreen from "../screens/customer/RequestServiceScreen";
import BookingStatusScreen from "../screens/customer/BookingStatusScreen";
import CustomerBookingsScreen from "../screens/customer/CustomerBookingsScreen";
import CustomerProfileScreen from "../screens/customer/CustomerProfileScreen";

/* Artisan */
import ArtisanHomeScreen from "../screens/artisan/ArtisanHomeScreen";
import CompleteProfileScreen from "../screens/artisan/CompleteProfileScreen";
import SetServicesScreen from "../screens/artisan/SetServicesScreen";
import SetAvailabilityScreen from "../screens/artisan/SetAvailabilityScreen";
import IncomingJobsScreen from "../screens/artisan/IncomingJobsScreen";
import JobDetailsScreen from "../screens/artisan/JobDetailsScreen";
import ArtisanEarningsScreen from "../screens/artisan/ArtisanEarningsScreen";
import ArtisanProfileScreen from "../screens/artisan/ArtisanProfileScreen";

const Stack = createNativeStackNavigator();


export default function AppNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Splash */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* Auth */}
      <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />
      <Stack.Screen name="CustomerRegister" component={CustomerRegisterScreen} />
      <Stack.Screen name="ArtisanRegister" component={ArtisanRegisterScreen} />
      <Stack.Screen name="OTPVerify" component={OTPVerifyScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Customer */}
      <Stack.Screen name="CustomerHome" component={CustomerHomeScreen} />
      <Stack.Screen name="SearchArtisan" component={SearchArtisanScreen} />
      <Stack.Screen name="ArtisanProfile" component={ArtisanProfileScreen} />
      <Stack.Screen name="RequestService" component={RequestServiceScreen} />
      <Stack.Screen name="BookingStatus" component={BookingStatusScreen} />
      <Stack.Screen name="CustomerBookings" component={CustomerBookingsScreen} />
      <Stack.Screen name="CustomerProfile" component={CustomerProfileScreen} />

      {/* Artisan */}
      <Stack.Screen name="ArtisanHome" component={ArtisanHomeScreen} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
      <Stack.Screen name="SetServices" component={SetServicesScreen} />
      <Stack.Screen name="SetAvailability" component={SetAvailabilityScreen} />
      <Stack.Screen name="IncomingJobs" component={IncomingJobsScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="ArtisanEarnings" component={ArtisanEarningsScreen} />
      {/* <Stack.Screen name="ArtisanProfile" component={ArtisanProfileScreen} /> */}
    </Stack.Navigator>
  );
}
