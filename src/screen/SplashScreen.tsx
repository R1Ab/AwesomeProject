import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>Welcome To App</Text>
        </View>
    )
}

const styles = StyleSheet.create({})