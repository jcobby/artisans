import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

/* Screens */
import ArtisanHomeScreen from "../screens/artisan/ArtisanHomeScreen";
// import ArtisanJobsScreen from "../screens/artisan/ArtisanJobsScreen";
// import ArtisanWalletScreen from "../screens/artisan/ArtisanWalletScreen";
import ArtisanProfileScreen from "../screens/artisan/ArtisanProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/colors";
import ArtisanChatsTabScreen from "../screens/artisan/ArtisanChatsTabScreen";

const Tab = createBottomTabNavigator();

export default function ArtisanTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 80,
          paddingBottom: 15,
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={ArtisanHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />

      {/* Bookings */}
      {/* <Tab.Screen
           name="Bookings"
           component={CustomerBookingsScreen}
           options={{
             tabBarIcon: ({ focused }) => (
               <Ionicons
                 name={focused ? "hammer" : "hammer-outline"}
                 size={26}
                 color={focused ? Colors.primary : Colors.textSoft}
               />
             ),
           }}
         /> */}

      {/* Chat */}
      <Tab.Screen
        name="Chat"
        component={ArtisanChatsTabScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={26}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ArtisanProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
