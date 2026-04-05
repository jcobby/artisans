import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { IInputProps, ILabelProps } from "../../interfaces/IElements";
import { RequiredMarker, TooltipInstance } from "./misc";
import { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectInputProps {
  label?: string;
  value: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (val: string) => void;
  requiredMarker?: boolean;
}

type Props = {
  length?: number;
  onChangeOTP?: (code: string) => void;
};

export const CheckboxInputg = ({ label, value, onValueChange }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onValueChange(!value)}
      className="flex-row items-start gap-3 mb-4"
    >
      <View
        className={`w-5 h-5 rounded border items-center justify-center ${
          value ? "bg-green-700 border-green-700" : "bg-white border-gray-400"
        }`}
      >
        {value && <Ionicons name="checkmark" size={14} color="white" />}
      </View>

      <View className="flex-1">
        <Text className="text-[13px] leading-5 text-gray-700">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmit?: () => void;
  className?: string;
  onFocus?: () => void;
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

interface AltRegularInputProps {
  value?: string;
  onChangeVal: (text: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  label?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
  error?: string;
}

export const AltRegularInput = ({
  value = "",
  onChangeVal,
  onBlur,
  placeholder,
  label,
  iconName,
  isPassword = false,
  error,
}: AltRegularInputProps) => {
  const [secure, setSecure] = useState(isPassword);

  return (
    <View className="mb-4 w-full">
      {/* Label */}
      {label && (
        <Text className="text-[13px] text-gray-700 font-medium mb-1">
          {label}
        </Text>
      )}

      {/* Input Container */}
      <View
        className={`flex-row items-center rounded-lg px-3 bg-white h-12 border ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {/* Left Icon */}
        {iconName && (
          <View className="mr-2">
            <Ionicons name={iconName} size={20} color="#9CA3AF" />
          </View>
        )}

        {/* Input */}
        <TextInput
          className="flex-1 text-[15px] text-black h-full"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeVal}
          onBlur={onBlur}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={secure}
          autoCapitalize="none"
        />

        {/* Password Toggle */}
        {isPassword && (
          <TouchableOpacity
            onPress={() => setSecure((prev) => !prev)}
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

      {/* Error Message */}
      {error && <Text className="text-red-500 text-xs mt-1">{error}</Text>}
    </View>
  );
};

export const CheckboxInput = ({ label, value, onValueChange }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onValueChange(!value)}
      className="flex-row items-start gap-3 mb-4 "
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
      <View className="">
        <Text className="text-[13px] leading-5 text-">{label}</Text>
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
  onFocus,
}: SearchInputProps) {
  return (
    <View
      className={`flex-row items-center border  bg-gray-100 rounded-xl px-3 py-2 ${className}`}
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
        onFocus={onFocus}
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

export const SelectInput = ({
  label,
  value,
  options,
  placeholder = "Select option",
  onChange,
  requiredMarker = false,
}: SelectInputProps) => {
  const [visible, setVisible] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  return (
    <View className="mb-4 flex flex-col gap-1.5">
      {label && (
        <LabelInstance
          label={label}
          requiredMarker={requiredMarker}
          customLabelClass="text-[13px] text-gray-700 font-medium"
        />
      )}

      {/* Select Box */}
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="flex-row items-center justify-between border border-black rounded-lg px-3 bg-white h-12"
      >
        <Text
          className={`text-[15px] ${selected ? "text-black" : "text-gray-400"}`}
        >
          {selected ? selected.label : placeholder}
        </Text>

        <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Modal Dropdown */}
      <Modal visible={visible} transparent animationType="fade">
        <TouchableOpacity
          className="flex-1 bg-black/30 justify-center px-6"
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View className="bg-white rounded-xl p-4">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="py-3 border-b border-gray-200"
                  onPress={() => {
                    onChange(item.value);
                    setVisible(false);
                  }}
                >
                  <Text className="text-base text-black">{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
