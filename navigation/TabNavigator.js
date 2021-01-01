import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

import { MainStackNavigator, ContactStackNavigator, SearchStackNavigator, ProfileStackNavigator } from './StackNavigator'

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  let size = 26;

  return (
    <Tab.Navigator initialRouteName="Home"
        activeTintColor="#e91e63"
        barStyle={{ backgroundColor: '#fc0303' }}
      >
      <Tab.Screen name="Home" component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Contact" component={ContactStackNavigator}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Search" component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color}) => (
            <Icon name="ios-person" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator