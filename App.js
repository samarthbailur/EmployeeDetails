

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserDetails from './component/userdetails';
import Login from './component/login';

const HomeStack = createStackNavigator(
  {
    Login: { screen: Login },
    UserDetails: { screen: UserDetails },
  },
  {
    defaultNavigationOptions: {
      headerShown : false,
      headerStyle: {
      },
      headerTintColor: '#f8f8f8',
      title: 'Login',
    },
  }
);

export default createAppContainer(HomeStack);
