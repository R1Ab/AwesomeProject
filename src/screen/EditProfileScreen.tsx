import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../utils/colors";
import CustomHeader from "../components/CustomHeader";
import CustomTextInput from "../components/CustomTextInput";
import Button from "../components/Button";

 const EditProfileScreen = ():JSX.Element => {
    return (<View style={styles.container}>

        <CustomHeader title="Edit Profile" />

        <View style={{ marginTop: 50 }}>

            <CustomTextInput hint="Enter your Name"
                inputType={"text"}
            />
            <CustomTextInput hint="Enter E-mail"
                inputType={"email"}
            />
            <CustomTextInput hint="Enter Mobile Number"
                inputType={"numeric"} />

        </View>
        <Button title = "Submit" />

    </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor
    }

})
export default EditProfileScreen;