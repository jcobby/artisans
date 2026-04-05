import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the shape of your user object
export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  role: "customer" | "artisan";
  profileImage?: string;
}

// Define the shape of your auth context
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (userData: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  userRole: string | null;
  setUserRole: React.Dispatch<React.SetStateAction<string | null>>;
  authenticated: boolean;
  setauthenticated: React.Dispatch<React.SetStateAction<boolean>>;

}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [authenticated, setauthenticated] = useState<boolean>(false);

  // Check if user is logged in on app start
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      const userData = await AsyncStorage.getItem("userData");

      if (token && userData) {
        setUser(JSON.parse(userData));
        // if a user is stored, consider them authenticated for now
        setauthenticated(true);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (userData: User, token: string) => {
    try {
      // Save to AsyncStorage
      await AsyncStorage.setItem("authToken", token);
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      await AsyncStorage.setItem("userRole", userData.role);

      // Update state
      setUser(userData);
      setUserRole(userData.role);
      setauthenticated(true);
    } catch (error) {
      console.error("Error saving login data:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Remove from AsyncStorage
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.removeItem("userData");
       await AsyncStorage.removeItem("userRole");

      // Update state
      setUser(null);
      setUserRole(null);
      setauthenticated(false);
    } catch (error) {
      console.error("Error during logout:", error);
      throw error;
    }
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser: User = { ...user, ...userData };
      setUser(updatedUser);
      // Also update AsyncStorage (no need to await here)
      AsyncStorage.setItem("userData", JSON.stringify(updatedUser));
    }
  };

  // Restore role / authenticated flag from storage on app start
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        const role = await AsyncStorage.getItem("userRole");

        if (token && role) {
          setUserRole(role);
          setauthenticated(true);
        }
      } catch (error) {
        console.error("Error restoring auth session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  // Persist role / authenticated whenever they change so navigation can recover on relaunch
  useEffect(() => {
    const persistAuthFlags = async () => {
      try {
        if (authenticated && userRole) {
          await AsyncStorage.setItem("userRole", userRole);
        } else {
          await AsyncStorage.removeItem("userRole");
        }
      } catch (error) {
        console.error("Error persisting auth flags:", error);
      }
    };

    persistAuthFlags();
  }, [authenticated, userRole]);

  const value = {
    user,
    isAuthenticated: !!user,
    // isAuisAuthenticated: false,
    isLoading,
    login,
    logout,
    updateUser,
    userRole, 
    setUserRole,
    authenticated,
    setauthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};