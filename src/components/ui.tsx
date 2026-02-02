import { View, Text, Image, Modal, Pressable, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../theme/colors";


interface UserInfoRowProps {
  image: string;
  name: string;
  subtitle?: string;
  rating?: number;
  distance?: string;
  active?: boolean;
}

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

interface ArtisanCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
}

interface ChatPreviewProps {
  name: string;
  message: string;
  time: string;
  unread?: boolean;
}

interface SettingsToggleProps {
  title: string;
  description?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

interface ServiceBookingCardProps {
  title: string;
  provider: string;
  date: string;
  price: string;
  status: "active" | "completed" | "cancelled";
}

type HeaderProps = {
  title?: string;
  showBack?: boolean;
  rightLabel?: string;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightPress?: () => void;
};

export function UserInfoRow({
  image,
  name,
  subtitle,
  rating,
  distance,
  active,
}: UserInfoRowProps) {
  return (
    <View className="flex-row items-center gap-3">
      <Image source={{ uri: image }} className="w-11 h-11 rounded-full" />

      <View className="flex-1">
        <Text className="font-semibold text-sm text-gray-900">{name}</Text>

        {subtitle && <Text className="text-xs text-gray-500">{subtitle}</Text>}

        {rating && <Text className="text-xs text-yellow-500">⭐ {rating}</Text>}
      </View>

      {distance && <Text className="text-xs text-gray-400">{distance}</Text>}

      {active && <View className="w-2 h-2 rounded-full bg-green-500" />}
    </View>
  );
}

export function ArtisanCard({ image, name, role, rating }: ArtisanCardProps) {
  return (
    <View className="bg-gray-100 rounded-xl p-4 items-center">
      <Image source={{ uri: image }} className="w-16 h-16 rounded-full" />

      <Text className="mt-2 font-semibold text-gray-900">{name}</Text>

      <Text className="text-xs text-gray-500">{role}</Text>

      <Text className="mt-1 text-yellow-500 text-sm">⭐ {rating}</Text>
    </View>
  );
}

export function ChatPreview({ name, message, time, unread }: ChatPreviewProps) {
  return (
    <View
      className={`p-3 rounded-xl ${unread ? "bg-green-50" : "bg-gray-100"}`}
    >
      <Text className="font-semibold text-sm text-gray-900">{name}</Text>

      <Text className="text-sm text-gray-600 mt-1">{message}</Text>

      <Text className="text-xs text-gray-400 text-right mt-1">{time}</Text>
    </View>
  );
}

export function SettingsToggle({
  title,
  description,
  value,
  onChange,
}: SettingsToggleProps) {
  return (
    <View className="flex-row items-center justify-between py-3">
      <View className="flex-1 pr-4">
        <Text className="font-medium text-gray-900">{title}</Text>

        {description && (
          <Text className="text-xs text-gray-500">{description}</Text>
        )}
      </View>

      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

const statusStyles = {
  active: "text-green-600 bg-green-100",
  completed: "text-blue-600 bg-blue-100",
  cancelled: "text-red-600 bg-red-100",
};

export function ServiceBookingCard({
  title,
  provider,
  date,
  price,
  status,
}: ServiceBookingCardProps) {
  return (
    <View className="bg-gray-100 rounded-xl p-4">
      <Text className="font-semibold text-gray-900">{title}</Text>

      <Text className="text-xs text-gray-500">{provider}</Text>

      <Text className="text-xs text-gray-400 mt-1">{date}</Text>

      <View className="flex-row justify-between items-center mt-3">
        <Text className="font-semibold text-green-600">{price}</Text>

        <Text
          className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

export function ConfirmModal({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/40 justify-center items-center">
        <View className="bg-white w-4/5 rounded-2xl p-5">
          <Text className="font-semibold text-lg text-gray-900">{title}</Text>

          <Text className="text-sm text-gray-600 mt-2">{message}</Text>

          <View className="flex-row justify-end gap-6 mt-6">
            <Pressable onPress={onCancel}>
              <Text className="text-red-500 font-medium">Cancel</Text>
            </Pressable>

            <Pressable onPress={onConfirm}>
              <Text className="text-green-600 font-semibold">Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}




export default function Header({
  title,
  showBack = false,
  rightLabel,
  rightIcon,
  onRightPress,
}: HeaderProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }} className="">
      <View className="flex-row items-center justify-between px-4 py-3">

        {/* LEFT — BACK */}
        {showBack ? (
          <Pressable
            onPress={() => navigation.goBack()}
            className="flex-row items-center gap-1"
            hitSlop={10}
          >
            <Ionicons name="chevron-back" size={22} color="#8B5E3C" />
            <Text className="text-[16px] font-medium ">
              Back
            </Text>
          </Pressable>
        ) : (
          <View className="w-[60px]" />
        )}

        {/* CENTER — TITLE */}
        <Text
          numberOfLines={1}
          className="text-[18px] font-semibold "
        >
          {title}
        </Text>

        {/* RIGHT — ACTION */}
        {rightLabel || rightIcon ? (
          <Pressable
            onPress={onRightPress}
            className="flex-row items-center gap-1"
            hitSlop={10}
          >
            {rightLabel && (
              <Text className="text-[15px] font-medium ">
                {rightLabel}
              </Text>
            )}

            {rightIcon && (
              <Ionicons name={rightIcon} size={18}  />
            )}
          </Pressable>
        ) : (
          <View className="w-[60px]" />
        )}

      </View>
    </View>
  );
}

