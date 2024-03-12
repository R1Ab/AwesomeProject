import React from "react";
import { StyleSheet, TouchableOpacity ,Text} from "react-native";
import Colors from "../utils/colors";

interface ButtonProps{
 title:string;

 onButtonClick?:() =>void;

}

const Button = (props:ButtonProps):React.ReactElement => {
    const{title,onButtonClick} = props;

    return (
    <TouchableOpacity style={styles.container}
    onPress = {onButtonClick}>
        
    <Text>
       {title}
       
    </Text>
    </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.buttonColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignSelf: "center",
        marginTop: 50
    }
})

export default Button;