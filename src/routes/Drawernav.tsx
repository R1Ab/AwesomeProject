import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../screen/DrawerScreen/Contact'
import Account from '../screen/DrawerScreen/Account'

export default function Drawernav() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Contact' component={Contact}
            />
            <Drawer.Screen
                name='Account' component={Account}
            />
        </Drawer.Navigator>
    )
}