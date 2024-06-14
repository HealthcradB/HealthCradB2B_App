import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Onboarding/Splash/Splash';
import SelectAuth from '../Onboarding/selectScreen/SelectAuth';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Back from '../components/GoBack/Back';
import LoginOtp from '../components/Otp/LoginOtp';
import RegisterOtp from '../components/Otp/RegisterOtp';
import AppNavigator from './AppNavigator';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Order from '../screens/Order';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectAuth"
          component={SelectAuth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AppNavigator"
          component={AppNavigator}
          options={{headerShown: false}}
        />

        {/* screens */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />

        {/* common components */}
        <Stack.Screen
          name="goBack"
          component={Back}
          options={{headerShown: false}}
        />

        {/* otp section page */}
        <Stack.Screen
          name="LoginOtp"
          component={LoginOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterOtp"
          component={RegisterOtp}
          options={{headerShown: false}}
        />

        {/* screens */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
