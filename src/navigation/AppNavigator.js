import { View, Image } from 'react-native';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Order from '../screens/Order';
import Profile from '../screens/Profile';

const Bottom = createBottomTabNavigator();

const AppNavigator = () => {
  const [isBottomNavVisible, setBottomNavVisible] = useState(true);

  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../images/home_blue.png')
              : require('../images/home_black.png');
          } else if (route.name === 'Category') {
            iconName = focused
              ? require('../images/category_blue.png')
              : require('../images/category_black.png');
          } else if (route.name === 'Order') {
            iconName = focused
              ? require('../images/order_blue.png')
              : require('../images/order_black.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../images/profile_blue.png')
              : require('../images/profile_black.png');
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
        tabBarActiveTintColor: '#13C7EB',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: isBottomNavVisible ? 'flex' : 'none' }
      })}
    >
      <Bottom.Screen
        name="Home"
        options={{ headerShown: false }}
      >
        {() => <Home setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
      <Bottom.Screen
        name="Category"
        options={{ headerShown: false }}
      >
        {() => <Category setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
      <Bottom.Screen
        name="Order"
        options={{ headerShown: false }}
      >
        {() => <Order setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
      <Bottom.Screen
        name="Profile"
        options={{ headerShown: false }}
      >
        {() => <Profile setBottomNavVisible={setBottomNavVisible} />}
      </Bottom.Screen>
    </Bottom.Navigator>
  );
};

export default AppNavigator;
