import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../context/AuthContext";

const MenuItem = ({ icon, title, subtitle, onPress }: any) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between py-4"
  >
    <View className="flex-row items-center gap-4">
      <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
        <Ionicons name={icon} size={20} color="#111" />
      </View>

      <View>
        <Text className="text-base font-medium text-black">
          {title}
        </Text>
        {subtitle && (
          <Text className="text-xs text-gray-500">
            {subtitle}
          </Text>
        )}
      </View>
    </View>

    <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
  </TouchableOpacity>
);

export default function ArtisanProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <ScrollView className="flex-1 bg-gray-50 px-5 pt-6">

      {/* Header */}
      <Text className="text-2xl font-bold text-black mb-6">
        Profile
      </Text>

      {/* User Summary Card */}
      <View className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
        <Text className="text-lg font-semibold text-black">
          {user?.name || "Artisan"}
        </Text>
        {user?.phone && (
          <Text className="text-sm text-gray-500">{user.phone}</Text>
        )}
      </View>

      {/* Account Section */}
      <View className="bg-white rounded-xl px-4 border border-gray-200 mb-6">

        <MenuItem
          icon="person-outline"
          title="Account Settings"
          subtitle="Edit profile details"
          onPress={() => {}}
        />

        <View className="border-b border-gray-200" />

        <MenuItem
          icon="notifications-outline"
          title="Notifications"
          subtitle="Push & email preferences"
          onPress={() => {}}
        />

        <View className="border-b border-gray-200" />

        <MenuItem
          icon="shield-checkmark-outline"
          title="Security"
          subtitle="Password & authentication"
          onPress={() => {}}
        />

        <View className="border-b border-gray-200" />

        <MenuItem
          icon="card-outline"
          title="Payment Methods"
          subtitle="Manage cards & billing"
          onPress={() => {}}
        />

      </View>

      {/* More Section */}
      <View className="bg-white rounded-xl px-4 border border-gray-200 mb-6">

        <MenuItem
          icon="document-text-outline"
          title="Privacy Policy"
          onPress={() => {}}
        />

        <View className="border-b border-gray-200" />

        <MenuItem
          icon="help-circle-outline"
          title="Help & Support"
          onPress={() => {}}
        />

      </View>

      {/* Logout */}
      <TouchableOpacity
        className="bg-red-50 rounded-xl py-4 items-center border border-red-200"
        onPress={logout}
      >
        <Text className="text-red-600 font-semibold">
          Log Out
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
