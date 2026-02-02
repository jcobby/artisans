import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CustomerHomeScreen from "../screens/customer/CustomerHomeScreen";
import CustomerBookingsScreen from "../screens/customer/CustomerBookingsScreen";
import CustomerProfileScreen from "../screens/customer/CustomerProfileScreen";
import CustomerChatScreen from "../screens/customer/CustomerChatScreen";
import { Colors } from "../theme/colors";


const Tab = createBottomTabNavigator();

export default function CustomerTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={CustomerHomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />

      {/* Bookings */}
      <Tab.Screen
        name="Bookings"
        component={CustomerBookingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "hammer" : "hammer-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />

      {/* Chat */}
      <Tab.Screen
        name="Chat"
        component={CustomerChatScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={CustomerProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? Colors.primary : Colors.textSoft}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
