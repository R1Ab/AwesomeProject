import React from "react";
import { Text, View } from "react-native";
import Colors from "../utils/colors";
import Button from "../components/Button";



const HelloScreen = () => {
    return(
        <View style={{ flex: 1, backgroundColor: Colors.backgroundColor ,alignItems:"center"}}>

        <Text>
            Hello World
        </Text>

        <Button 
        
        title = "SignUp"
        />

    </View>

    );

    
}
export default HelloScreen;