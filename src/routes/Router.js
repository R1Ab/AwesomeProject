import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/LoginScreen'
import RegistrationScreen from '../screen/RegistrationScreen'
import SplashScreen from '../screen/SplashScreen'
import BottomNav from './BottomNav'
import Drawernav from './Drawernav'
import PractiseScreen from '../screen/PractiseScreen'

export default function Router() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName='My Drawer'>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Registration" component={RegistrationScreen} />
                <Stack.Screen name="My Dashboard" component={BottomNav} />
                <Stack.Screen name="My Drawer" component={Drawernav} />
                <Stack.Screen name='PractiseScreen' component={PractiseScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}




