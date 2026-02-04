import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useAuth } from '../../../context/AuthContext';
import Header from '../../ui';
import { View } from 'react-native';
import { AltRegularInput, CheckboxInput } from '../../inputs';
import { ButtonInstance } from '../../buttons';

export default function CustomerRegistration() {
      const navigation = useNavigation<any>();
      const { userRole, setUserRole, authenticated, setauthenticated } = useAuth();
  return (
    <>
      <Header
              title="Customer Registration"
              showBack={true}
              rightLabel="Skip"
              rightIcon="arrow-forward"
            />
            <View className="px-10 py-10">
              <AltRegularInput
                label="Full Name"
                placeholder="Enter your full name"
                value={""}
                onChangeVal={(val: string) => {}}
                iconName="person-outline"
              />
      
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
      
              {/* confirm */}
              <AltRegularInput
                label="Confirm Password"
                placeholder="Re-enter your password"
                value={""}
                onChangeVal={(val: string) => {}}
                iconName="lock-closed-outline"
                isPassword={true}
              />
              {/* terms and condition accept */}
              <View className="mt-4 mb-6 flex-row  ">
                <CheckboxInput
                  label={`By clicking ‘Sign Up’, you agree to Kwafts terms and conditions guiding the use of this app.
        `}
                />
              </View>
      
              <ButtonInstance
                label="Submit"
                buttonColor="primary"
                customClass="w-full mt-6"
                clickEvt={() => {
                  setUserRole("customer");
                  setauthenticated(true);
                  navigation.navigate("CustomerTabs")}}
              />
            </View>
    </>
  )
}
