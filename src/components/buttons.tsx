import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { IButtonProps } from "../../interfaces/IElements";
import { Colors } from "../theme/colors";
import { ButtonLoader } from "./loaders";


type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

export const ButtonInstance = ({
  loading,
  clickEvt,
  customClass,
  disabled,
  showIcon,
  icon,
  iconColor,
  iconSize,
  iconPosition = "left",
  label,
  customStyle,
  type,
  title,
  buttonColor,
}: IButtonProps) => {
  // Get background color based on buttonColor prop
  const getBackgroundColor = () => {
    switch (buttonColor) {
      case "primary":
        return Colors.primary;
      case "primaryDark":
        return Colors.primaryDark;
      case "cream":
        return Colors.cream;
      case "white":
        return "#FFFFFF";
      case "red":
        return "#EF4444";
      default:
        return Colors.primary;
    }
  };

  // Get text color based on button color
  const getTextColor = () => {
    if (iconColor) return iconColor;
    
    // Light backgrounds get dark text
    if (buttonColor === "cream" || buttonColor === "white") {
      return Colors.textSoft;
    }
    
    // Dark backgrounds get white text
    return "#FFFFFF";
  };

  const backgroundColor = getBackgroundColor();
  const textColor = getTextColor();

  return (
    <TouchableOpacity
      className={`flex-row items-center justify-center px-6 py-3 rounded-lg ${customClass} ${
        disabled ? "opacity-50" : ""
      }`}
      style={{
        backgroundColor: disabled ? "#9CA3AF" : backgroundColor,
        borderWidth: buttonColor === "cream" || buttonColor === "white" ? 1 : 0,
        borderColor: Colors.border,
        ...customStyle,
      }}
      onPress={disabled || loading ? undefined : clickEvt}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="small" />
      ) : (
        <>
          {showIcon && icon && iconPosition === "left" && (
            <View className="mr-2">
              {icon}
            </View>
          )}
          
          {label && (
            <Text
              className="font-medium text-sm"
              style={{ color: textColor }}
            >
              {label}
            </Text>
          )}
          
          {showIcon && icon && iconPosition === "right" && (
            <View className="ml-2">
              {icon}
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};





export function PrimaryButton({
  title,
  onPress,
  loading = false,
  disabled = false,
  className = "",
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`bg-blue-600 rounded-xl py-3 items-center justify-center ${
        disabled ? "opacity-50" : ""
      } ${className}`}
      activeOpacity={0.85}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className="text-white font-bold text-base">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
