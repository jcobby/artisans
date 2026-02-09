import React, { useState } from 'react'
import Header from '../../ui';
import { Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../../typography';
import { AltRegularInput } from '../../inputs';
import { Colors } from '../../../theme/colors';
import { ButtonInstance } from '../../buttons';
import { useAuth } from '../../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../../context/AppContext';

export default function LoginContainer() {

      const { userRole, setUserRole, authenticated, setauthenticated } = useAuth();
    
      const navigation = useNavigation();
      const [phone, setPhone] = useState("");
      const [password, setPassword] = useState("");
      const [isLoading, setIsLoading] = useState(false);
      const [errors, setErrors] = useState({ phone: "", password: "" });
      const { theme, toggleTheme, notifications, toggleNotifications } =
        useAppContext();
      console.log("Current Theme:", theme);
      console.log("Notifications Enabled:", notifications);
    
      const validatePhone = (phoneNumber: string) => {
        // Basic phone validation - adjust regex based on your region
        const phoneRegex = /^[0-9]{10,15}$/;
        return phoneRegex.test(phoneNumber.replace(/\s/g, ""));
      };
    
      const handleLogin = async () => {
        // Reset errors
        setErrors({ phone: "", password: "" });
    
        // Validation
        let hasError = false;
    
        if (!phone.trim()) {
          setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
          hasError = true;
        } else if (!validatePhone(phone)) {
          setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
          hasError = true;
        }
    
        if (!password.trim()) {
          setErrors((prev) => ({ ...prev, password: "Password is required" }));
          hasError = true;
        } else if (password.length < 6) {
          setErrors((prev) => ({
            ...prev,
            password: "Password must be at least 6 characters",
          }));
          hasError = true;
        }
    
        if (hasError) return;
    
        // Start loading
        setIsLoading(true);
    
        try {
          // TODO: Replace this with your actual API call
          // Example: const response = await loginAPI(phone, password);
    
          // Simulating API call
          await new Promise((resolve) => setTimeout(resolve, 1500));
    
          // If login successful, navigate to customer dashboard
          navigation.navigate("CustomerHome" as never);
        } catch (error) {
          // Handle login error
          setErrors((prev) => ({
            ...prev,
            password: "Invalid credentials. Please try again.",
          }));
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <>
      <Header
        // title="Create Account"
        rightLabel="Skip"
        rightIcon="arrow-forward"
        onRightPress={() => {
          setUserRole("customer");
          setauthenticated(true);
          navigation.navigate("CustomerTabs" as never);
        }}
      />
      <View className="px-10 pt-20">
        <Title type="h3" content="Log In" />

        <Text className="text- mt-2 mb-6">
          Welcome back, login to continue enjoy professional services at a
          lowers cost.
        </Text>

        <AltRegularInput
          label="Phone Number"
          placeholder="Enter your phone number"
          value={""}
          onChangeVal={(val: string) => {}}
          iconName="call-outline"
        />

        {/* passwords */}
        <AltRegularInput
          label="Password"
          placeholder="Enter your password"
          value={""}
          onChangeVal={(val: string) => {}}
          iconName="lock-closed-outline"
          isPassword={true}
        />

        {/* forgot password text */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword" as never)}
        >
          {/* style text color */}
          <Text className="mt-4" style={{ color: Colors.primary }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <ButtonInstance
          label="Submit"
          buttonColor="primary"
          customClass="w-full mt-6"
          clickEvt={() => {
            // setUserRole("customer");
            // setauthenticated(true);
            navigation.navigate("OTPVerification" as never);
          }}
        />
      </View>
    </>
  )
}
