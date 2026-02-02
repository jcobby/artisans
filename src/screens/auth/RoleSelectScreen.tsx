import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RoleSelectPage from "../../components/pages/auth/roleSelect";

type Props = NativeStackScreenProps<any>;

export default function RoleSelectScreen({ navigation }: Props) {
  const handleSelectRole = (role: "customer" | "artisan") => {
    if (role === "customer") {
      navigation.navigate("CustomerRegister");
    } else {
      navigation.navigate("ArtisanRegister");
    }
  };

  return (
    <View className="flex-1">
      <RoleSelectPage />

     
    </View>
  );
}

