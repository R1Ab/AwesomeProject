import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert, Image } from 'react-native'
import React from 'react'
// import { Button, TextInput } from 'react-native-paper'

export default function PractiseScreen() {
    return (
        <View style={style.container}>
            <View style={style.design}>

                <Text style={style.textheader}>PractiseScreen</Text>


                <Image style={{ height: 50, width: 50, alignSelf: "center", marginTop: 20 }}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/22/17/28/rings-684944_1280.jpg' }}
                />




                <TextInput style={style.input} placeholder='Name' />
                <TextInput style={style.input} placeholder='Password' />
                {/* <Text style={style.textheader}>PractiseScreen</Text> */}
                {/* <TextInput style={style.input} placeholder='Name'> </TextInput> */}
                {/* <TextInput style={style.input} placeholder='Password'> </TextInput> */}


                <TouchableOpacity style={{ borderRadius: 10, alignSelf: "center", backgroundColor: "#FFFF00", marginTop: 40, paddingHorizontal: 25, paddingVertical: 10 }}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ borderRadius: 10, alignSelf: "flex-end", backgroundColor: "#FFFF00", marginTop: 40, paddingHorizontal: 25, paddingVertical: 10 }}
                        onPress={() => Alert.alert("ok")}
                    >
                        <Text>
                            Ok
                        </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{ borderRadius: 10, alignSelf: "flex-end", backgroundColor: "#FFFF00", marginTop: 40, paddingHorizontal: 25, paddingVertical: 10 }}>
                        <Text>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                </View>




            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffff",



    },
    textheader: {
        fontSize: 25,
        fontStyle: "normal",
        alignSelf: "center",
        marginTop: 50,
        borderColor: "#000000",
        borderBottomColor: "#000000"
        // bor
    },
    design: {
        flex: .75,
        backgroundColor: "#fffff",
        borderWidth: 5,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 10
    },
    input: {
        marginHorizontal: 5,
        marginTop: 10,
        backgroundColor: "#00FFFF",
        color: "#000000"
    }

})