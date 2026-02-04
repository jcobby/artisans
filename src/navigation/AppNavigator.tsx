import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import CustomerStack from "./CustomerStack";
import ArtisanTabNavigator from "./ArtisanTabNavigator";
import { useAppContext } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

export default function AppNavigator() {
  const {  } = useAppContext();
  const { isLoading, userRole, authenticated, setauthenticated } = useAuth();

  if (isLoading) return null; // splash or loader handled elsewhere
const isAuthenticated = false; // Replace with actual authentication logic
// const userRole = "customer"; // Replace with actual user role logic


  return (
    <NavigationContainer>
      {!isAuthenticated ? (
        <ArtisanTabNavigator />
        // <AuthStack />
      ) : userRole === "customer" ? (
        <CustomerStack />
       ) : (
        <ArtisanTabNavigator />
      )} 
    </NavigationContainer>
  );
}
