import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import Colors from "../utils/colors";
import CustomTextInput from "../components/CustomTextInput";
import Button from "../components/Button";

const ChangePasswordScreen = () => {

    return (<View style={styles.contatiner}>

        <CustomHeader title="Change Password" />

        <View style={{ marginTop: 40 }}>
            <CustomTextInput hint="Current password" />
            <CustomTextInput hint="New password" />
            <CustomTextInput hint="Cofirm password" />
        </View>

        <Button title="Submit" />

    </View>

    );
}
const styles = StyleSheet.create({
    contatiner: {
        backgroundColor: Colors.backgroundColor,
        flex: 1
    },
    buttonContainer: {
        backgroundColor: Colors.buttonColor,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 50


    }

})

export default ChangePasswordScreen;