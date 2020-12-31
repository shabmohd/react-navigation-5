import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useTheme, Avatar } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileScreen from './ProfileScreen';

const ProfileStack = createStackNavigator();

const Profile = ({ navigation }) => {
    const { colors } = useTheme();

    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // iOS
                    elevation: 0, // Android
                },
                headerTintColor: colors.text,
            }}>
            <ProfileStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: '',
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <Icon.Button
                                name="ios-menu"
                                size={25}
                                backgroundColor={colors.background}
                                color={colors.text}
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 10 }}>
                            <MaterialCommunityIcons.Button
                                name="account-edit"
                                size={25}
                                backgroundColor={colors.background}
                                color={colors.text}
                                onPress={() => navigation.navigate('EditProfile')}
                            />
                        </View>
                    ),
                }}
            />
            <ProfileStack.Screen
                name="EditProfile"
                options={{
                    title: 'Edit Profile',
                }}
                component={ProfileScreen}
            />
        </ProfileStack.Navigator>
    );
};

export default Profile;