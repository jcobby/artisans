import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { IInputProps, ILabelProps } from "../../interfaces/IElements";
import { RequiredMarker, TooltipInstance } from "./misc";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  length?: number;
  onChangeOTP?: (code: string) => void;
};

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  className?: string;
}

export const LabelInstance = ({
  label,
  requiredMarker = false,
  customLabelClass,
  infoText,
}: ILabelProps) => {
  return (
    <View className="flex-row items-center">
      <Text
        className={`text-sm text-black-500 font-medium ${customLabelClass}`}
      >
        {label} {requiredMarker && <RequiredMarker />}
      </Text>
      {infoText && (
        <TooltipInstance
          title={
            <View className="flex flex-col text-sm">
              {infoText.split("\n").map((line, i) => (
                <Text key={i}>{line}</Text>
              ))}
            </View>
          }
          placement="top"
        >
          <TouchableOpacity className="font-bold ml-3 px-2 text-blue-600 border border-blue-600 rounded-full">
            <Text className="text-blue-600 font-bold">i</Text>
          </TouchableOpacity>
        </TooltipInstance>
      )}
    </View>
  );
};

export const AltRegularInput = ({
  value,
  onChangeVal,
  placeholder,
  label,
  iconName, // Pass the string name for Ionicons (e.g., "person-outline")
  isPassword = false,
}: any) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View className="mb-4 flex flex-col gap-1.5 " style={{ width: "100%" }}>
      {/* Label Component */}
      <LabelInstance
        label={label}
        customLabelClass="text-[13px] text-gray-700 font-medium"
      />

      {/* Input Container */}
      <View className="flex-row items-center border border-black rounded-lg px-3 bg-white h-12">
        {/* Left Icon using Ionicons */}
        {iconName && (
          <View className="mr-2">
            <Ionicons name={iconName} size={20} color="#9CA3AF" />
          </View>
        )}

        {/* Input Field */}
        <TextInput
          className="flex-1 text-[15px] text-black h-full"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeVal}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={secure}
          autoCapitalize="none"
        />

        {/* Password Eye Toggle */}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            className="ml-2 p-1"
          >
            <Ionicons
              name={secure ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const CheckboxInput = ({ label, value, onValueChange }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onValueChange(!value)}
      className="flex-row items-start gap-3 mb-4 flex-1"
    >
      {/* Checkbox Square */}
      <View
        className={`w-5 h-5 rounded border items-center justify-center ${
          value ? "bg-green-700 border-green-700" : "bg-white border-gray-400"
        }`}
      >
        {value && <Ionicons name="checkmark" size={14} color="white" />}
      </View>

      {/* Label/Text Section */}
      <View className="flex-1">
        <Text className="text-[13px] leading-5 text-gray-700">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const OtpInput = ({ length = 6, onChangeOTP }: Props) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const refs = useRef<TextInput[]>([]);

  const handleChange = (text: string, i: number) => {
    // numbers only
    if (!/^\d*$/.test(text)) return;

    const next = [...values];
    next[i] = text;
    setValues(next);

    const code = next.join("");
    onChangeOTP?.(code);

    // move focus forward
    if (text && i < length - 1) {
      refs.current[i + 1]?.focus();
    }
  };

  const handleBackspace = (key: string, i: number) => {
    if (key === "Backspace" && !values[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  return (
    <View className="flex justify-between gap-3">
      <View className="flex-row justify-between mb-6">
        {values.map((v, i) => (
          <TextInput
            key={i}
            ref={(r) => {
              if (r) refs.current[i] = r;
            }}
            value={v}
            onChangeText={(t) => handleChange(t, i)}
            onKeyPress={({ nativeEvent }) =>
              handleBackspace(nativeEvent.key, i)
            }
            keyboardType="number-pad"
            maxLength={1}
            textContentType="oneTimeCode"
            className="w-14 h-14 border rounded-xl text-center text-xl font-semibold"
          />
        ))}
      </View>
    </View>
  );
};

export default function SearchInput({
  value,
  onChangeText,
  placeholder = "Search...",
  onSubmit,
  className = "",
}: SearchInputProps) {
  return (
    <View
      className={`flex-row items-center bg-gray-100 rounded-xl px-3 py-2 ${className}`}
    >
      {/* Search Icon */}
      <Ionicons name="search" size={20} color="#666" />

      {/* Input */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="flex-1 ml-2 text-base"
        returnKeyType="search"
        onSubmitEditing={onSubmit}
      />

      {/* Clear Button */}
      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText("")}>
          <Ionicons name="close-circle" size={18} color="#888" />
        </TouchableOpacity>
      )}
    </View>
  );
}
