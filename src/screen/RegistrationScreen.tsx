import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
// import CheckBox from "@react-native-community/checkbox";

import Colors from "../utils/colors";
import { FontSize } from "../utils/dimens";
import CustomTextInput from "../components/CustomTextInput";
import CustomHeader from "../components/CustomHeader";
// import Button from "../components/Button";
import LoginScreen from "./LoginScreen";


const RegistrationScreen = ({ navigation }) => {
    // const navi = props.navigation
    return (
        <View style={styles.container}>
            <CustomHeader title="Welcome to Registration" />
            <CustomTextInput
                hint=" Enter your Name"
                maxLimit={15}
                // maxLine={2}
                inputType="text"

            />

            <CustomTextInput
                hint="Enter Mobile Number"
                maxLimit={8}
            />

            <CustomTextInput
                hint="Enter your Email-id"
                maxLimit={20}
            />

            <CustomTextInput
                hint="Enter your Password"
                maxLimit={10}
                isPassword={true}
            />

            <CustomTextInput
                hint="Confirm your Password"
                maxLimit={10}
                isPassword={true}
            />


            <Text style={styles.link} >

                Agree Terms & Condition

            </Text>

            <View style={{ marginTop: 30, marginHorizontal: 30 }}>
                <Button onPress={() => navigation.navigate('Registration')} title='Registered' />
                <View style={{ flexDirection: "row", marginTop: 10, alignSelf: "flex-end" }}>
                    <Text>Already have an account</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ marginLeft: 10, color: 'blue' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.backgroundColor,
        flex: 1
    },
    header: {
        textAlign: "center",
        color: Colors.headerColor,
        fontSize: FontSize.header,
        marginTop: 80,
        fontWeight: "bold"
    },
    textInput: {
        borderColor: "#000000",
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 1,
        color: "#808080",
        marginTop: 25,
        marginHorizontal: 20,
        backgroundColor: Colors.textInputBackgroundColor,
        fontSize: FontSize.inputText

    },
    link: {
        color: Colors.labelColor,
        fontSize: 15,
        marginTop: 20,
        marginLeft: 25
    },
    label: {
        textAlign: "center",
        color: Colors.labelColor,
        fontSize: 15,
        marginTop: 20,
    },
    buttonContainer: {
        backgroundColor: Colors.buttonColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 50
    }

});

export default RegistrationScreen;