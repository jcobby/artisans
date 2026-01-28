import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { IInputProps, ILabelProps } from "../../interfaces/IElements";
import { RequiredMarker, TooltipInstance } from "./misc";

export const LabelInstance = ({
  label,
  requiredMarker = false,
  customLabelClass,
  infoText,
}: ILabelProps) => {
  return (
    <View className="flex-row items-center">
      <Text className={`text-sm text-black-500 font-medium ${customLabelClass}`}>
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

export const AltRegularInput = ({ value, onChangeVal, placeholder }: any) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 mb-1">Label</Text>
      <TextInput
        className="border border-gray-300 rounded px-2 py-1 text-black"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeVal}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};