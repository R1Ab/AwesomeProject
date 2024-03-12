import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import Colors from "../utils/colors";


const ForgetPasswordScreen = () => {
    return (<View style={styles.container}>

        <CustomHeader title="Forget Password" />

        <View style={{ marginTop: 80 }} >

            <CustomTextInput
                hint="Enter your e-mail id"
                inputType="text"
            />

        </View>

        <View
            style={{ flexDirection: "row", marginTop: 50 }}>

            <View style={{ marginHorizontal: 40 }}>

                <TouchableOpacity style={{ paddingHorizontal: 50, paddingVertical: 10, backgroundColor: Colors.buttonColor }}>

                    <Text>
                        Cancel
                    </Text>

                </TouchableOpacity >

            </View>


            <TouchableOpacity style={{ paddingHorizontal: 50, paddingVertical: 10, backgroundColor: Colors.buttonColor }}>
                <Text>
                    Submit
                </Text>
            </TouchableOpacity>

        </View>

    </View>


    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        flex: 1
    },
    buttonContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        minWidth: 150,
        marginTop: 50,
        flex: 3
    }
})

export default ForgetPasswordScreen;