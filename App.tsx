import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";
import "./global.css";
import { AuthProvider } from "./src/context/AuthContext";
import { AppProvider } from "./src/context/AppContext";

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        {/* <NavigationContainer> */}
          {/* <StatusBar style="dark" /> */}
          <AppNavigator />
        {/* </NavigationContainer> */}
      </AppProvider>
    </AuthProvider>
  );
}
