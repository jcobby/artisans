import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>What do you want to do?</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handleSelectRole("customer")}
      >
        <Text style={styles.cardTitle}>I need an artisan</Text>
        <Text style={styles.cardDesc}>
          Find trusted plumbers, electricians, carpenters near you
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handleSelectRole("artisan")}
      >
        <Text style={styles.cardTitle}>I am an artisan</Text>
        <Text style={styles.cardDesc}>
          Get customers and job requests in your area
        </Text>
      </TouchableOpacity>

      {/* LOGIN CTA */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>
          Already have an account? Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
  },
  loginBtn: {
    marginTop: 24,
    alignItems: "center",
  },
  loginText: {
    fontSize: 15,
    color: "#007AFF",
    fontWeight: "500",
  },
});
