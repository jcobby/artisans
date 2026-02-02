import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

/* Screens */
import ArtisanHomeScreen from "../screens/artisan/ArtisanHomeScreen";
// import ArtisanJobsScreen from "../screens/artisan/ArtisanJobsScreen";
// import ArtisanWalletScreen from "../screens/artisan/ArtisanWalletScreen";
import ArtisanProfileScreen from "../screens/artisan/ArtisanProfileScreen";

const Tab = createBottomTabNavigator();

export default function ArtisanTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Jobs") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Wallet") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return null;
        //   <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={ArtisanHomeScreen} />
      {/* <Tab.Screen name="Jobs" component={ArtisanJobsScreen} />
      <Tab.Screen name="Wallet" component={ArtisanWalletScreen} /> */}
      <Tab.Screen name="Profile" component={ArtisanProfileScreen} />
    </Tab.Navigator>
  );
}
