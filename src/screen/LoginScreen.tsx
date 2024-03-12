import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function LoginScreen({ navigation, route }) {
  // const { name, address } = route.params

  const [username, setname] = useState('')
  const [password, setpassword] = useState('')

  function onLoginHandler() {
    if (username === password) {
      // navigation.navigate('My Dashboard')
      navigation.navigate('My Drawer')

    } else {
      Alert.alert('Name or password are wrong')
    }

  }

  return (
    <View style={style.container}
    >
      <View style={{ marginHorizontal: 15 }}>

        {/* <MaterialCommunityIcons name='home' size={30} /> */}

        <Text style={{ fontSize: 30, alignSelf: "center" }}>User Login</Text>
        <Text>Fill credentials for authentication</Text>
        <TextInput style={style.TextInput}
          value={username}
          onChangeText={(val) => setname(val)}
          placeholder='username' />
        <TextInput style={style.TextInput}
          placeholder='password'
          value={password}
          onChangeText={(val) => setpassword(val)}
        />

        <View style={{ marginTop: 30, marginHorizontal: 30 }}>
          <Button onPress={onLoginHandler} title='Login' />
          <View style={{ flexDirection: "row", marginTop: 10, alignSelf: "flex-end" }}>
            <Text>Don't have an account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
              <Text style={{ marginLeft: 10, color: 'blue' }}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  )
}
const style = StyleSheet.create({
  TextInput: {
    backgroundColor: Colors.textInputBackgroundColor,
    borderRadius: 8,
    marginTop: 25,
    paddingHorizontal: 10
  },
  container: {
    marginTop: 80
  }

})
