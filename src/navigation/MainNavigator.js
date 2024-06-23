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
import Exclusive from '../screens/Exclusive';
import Brand from '../screens/Brand';
import SearchMedicine from '../screens/SearchMedicine';
import UpdatePharmacy from '../screens/UpdatePharmacy';
import EditProfile from '../screens/EditProfile';
import Help from '../screens/Help';
import Address from '../screens/Address';
import AddNewAddress from '../screens/AddNewAddress';
import Coupan from '../screens/Coupan';
import OrderPlaced from '../screens/OrderPlaced';
import Mycart from '../screens/Mycart';
import Testing from '../screens/Testing';
import OrderSummery from '../screens/OrderSummery';

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

        {/* exclusive see all */}
        <Stack.Screen
          name="Exclusive"
          component={Exclusive}
          options={{headerShown: false}}
        />

        {/* brand */}
        <Stack.Screen
          name="Brand"
          component={Brand}
          options={{headerShown: false}}
        />

        {/* seach medicine */}

        <Stack.Screen
          name="SearchMedicine"
          component={SearchMedicine}
          options={{headerShown: false}}
        />

        {/* update pharmacy details */}
        <Stack.Screen
          name="UpdatePharmacy"
          component={UpdatePharmacy}
          options={{headerShown: false}}
        />

        {/* edit profile */}

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        {/* help and support */}

        <Stack.Screen
          name="Help&Support"
          component={Help}
          options={{headerShown: false}}
        />

        {/* address */}
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewAddress"
          component={AddNewAddress}
          options={{headerShown: false}}
        />

        {/* coupan */}
        <Stack.Screen
          name="coupan"
          component={Coupan}
          options={{headerShown: false}}
        />

        {/* order placed */}
        <Stack.Screen
          name="orderPlaced"
          component={OrderPlaced}
          options={{headerShown: false}}
        />
        {/* my cart */}
        <Stack.Screen
          name="mycart"
          component={Mycart}
          options={{headerShown: false}}
        />
        {/* order-summery */}
        <Stack.Screen
          name="orderSummary"
          component={OrderSummery}
          options={{headerShown: false}}
        />



        {/* testing comp */}
        <Stack.Screen
          name="testing"
          component={Testing}
          options={{headerShown: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
