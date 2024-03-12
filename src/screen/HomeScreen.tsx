import { View, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'

export default function HomeScreen({ }) {

    const navigation = useNavigation()

    function onLoginHandler() {
        navigation.navigate('Login', { name: 'Abcd', address: 'noida' })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 20 }}>
            {/* <Text style={style.textView}>My Home Screen</Text> */}
            <View style={{ marginTop: 10 }}>
                <Card mode='outlined'>
                    <Card.Title title='User Form' subtitle='please fill this form'
                        left={(props) => <IconButton icon='folder' />}
                        right={() => <IconButton icon={'dots-vertical'} />}
                    />
                    <Card.Cover source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/22/17/28/rings-684944_1280.jpg' }} />
                    <Card.Content style={{ marginVertical: 20 }}>
                        <TextInput label={'Email Id'} />
                        <TextInput style={{ marginTop: 10 }} label={'Password'} />
                        <Button onPress={() => Alert.alert('ok bro')} style={{ marginTop: 15 }} mode='contained'>Login</Button>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Reset Form</Button>
                        <Button>Cancle</Button>
                    </Card.Actions>

                </Card>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    textView: {
        marginTop: 80,
        fontSize: 28,
        textAlign: 'center'
    }
})