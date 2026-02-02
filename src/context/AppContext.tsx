import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the shape of your app context
interface AppContextType {
  theme: "light" | "dark";
  notifications: boolean;
  language: string;
  toggleTheme: () => void;
  toggleNotifications: () => void;
  setLanguage: (lang: string) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguageState] = useState("en");

  // Load settings on app start
  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("theme");
      const savedNotifications = await AsyncStorage.getItem("notifications");
      const savedLanguage = await AsyncStorage.getItem("language");

      if (savedTheme) setTheme(savedTheme as "light" | "dark");
      if (savedNotifications)
        setNotifications(JSON.parse(savedNotifications));
      if (savedLanguage) setLanguageState(savedLanguage);
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
  };

  const toggleNotifications = async () => {
    const newValue = !notifications;
    setNotifications(newValue);
    await AsyncStorage.setItem("notifications", JSON.stringify(newValue));
  };

  const setLanguage = async (lang: string) => {
    setLanguageState(lang);
    await AsyncStorage.setItem("language", lang);
  };

  const value = {
    theme,
    notifications,
    language,
    toggleTheme,
    toggleNotifications,
    setLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};