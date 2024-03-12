import { StyleSheet, Text } from "react-native/types";
import { FontSize } from "../utils/dimens";

interface CustomTextLabelProps {
    heading: string;
}

function CustomTextLabel(props:CustomTextLabelProps): JSX.Element {
    return (
        <Text
            style={styles.Text}>
            {props.heading}

        </Text>
    );

}
const styles = StyleSheet.create({
    Text: {
        fontSize: FontSize.label
    }
})
export default CustomTextLabel;