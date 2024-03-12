import { InputModeOptions, StyleSheet,TextInput } from "react-native";
import Colors from "../utils/colors";
import { FontSize } from "../utils/dimens";

interface TextInputProps {
    hint: string;
    maxLimit?: number;
    isPassword?: boolean;
    maxLine?:number;
    inputType?:InputModeOptions;
    
    text?:() => void;
    
}

const CustomTextInput = (props: TextInputProps): React.ReactElement =>{
    const{text} = props;
    return (
        <TextInput style={styles.textInput}
            placeholder={props.hint}
            maxLength={props.maxLimit}
            secureTextEntry={props.isPassword}
            numberOfLines={props.maxLine}
            inputMode={props.inputType}
            onChangeText={text}
        >

        </TextInput>

    );
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: "#000000",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderWidth: 1,
        color: "#808080",
        marginTop: 25,
        marginHorizontal: 20,
        backgroundColor: Colors.textInputBackgroundColor,
        fontSize: FontSize.inputText
    
    },

});
export default CustomTextInput;