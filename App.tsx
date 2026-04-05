import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";
import "./global.css";
import { AuthProvider } from "./src/context/AuthContext";
import { AppProvider } from "./src/context/AppContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          {/* <NavigationContainer> */}
          {/* <StatusBar style="dark" /> */}
          <AppNavigator />
          {/* </NavigationContainer> */}
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
