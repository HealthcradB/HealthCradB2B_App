import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Order from '../screens/Order';
import Profile from '../screens/Profile';

const Bottom = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
        tabBarStyle: {
          display: 'flex'
        }
      })}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Bottom.Navigator>
  );
};

export default AppNavigator;
