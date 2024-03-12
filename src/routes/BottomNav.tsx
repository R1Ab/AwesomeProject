import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screen/HomeScreen'
import EditProfileScreen from '../screen/EditProfileScreen'
import ChangePasswordScreen from '../screen/ChangePasswordScreen'
import ForgetPasswordScreen from '../screen/ForgetPassword'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PractiseScreen from '../screen/PractiseScreen'
import FourScreen from '../screen/FourScreen'
export default function BottomNav() {
    const Tab = createBottomTabNavigator()
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName='Home'>
            <Tab.Screen name="Home"
                options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name='home' size={25} /> }}
                component={HomeScreen} />
            <Tab.Screen name='Practise' options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name='account-eye' size={25} /> }}
                component={PractiseScreen} />
            <Tab.Screen name="Editprofile" options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name='account-edit' size={25} /> }}
                component={EditProfileScreen} />
            <Tab.Screen name="ChangePassword"
                options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name='account-key' size={25} /> }}
                component={ChangePasswordScreen} />
            <Tab.Screen name="ForgetPassword"
                options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name='key' size={25} /> }}
                component={ForgetPasswordScreen} />
            <Tab.Screen name="Four"
                options={{ tabBarIcon: ({ }) => <MaterialCommunityIcons name='key' size={25} /> }}
                component={FourScreen} />
        </Tab.Navigator>

    )
}




//  <Tab.Screen name='Splash' component={SplashScreen} />
//                 <Tab.Screen name="Login" component={LoginScreen} />
//                 <Tab.Screen name="Registration" component={RegistrationScreen} />
