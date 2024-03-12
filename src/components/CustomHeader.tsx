import { Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
import { FontSize } from "../utils/dimens";

interface CustomHeaderProps {
    title: string;
}


function CustomHeader(props: CustomHeaderProps): JSX.Element {
    return (
        <Text style={styles.header} >
            {props.title}
        </Text>
    );
}
const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        color: Colors.headerColor,
        fontSize: FontSize.header,
        marginTop: 80,
        fontWeight: "bold"
    }


});
export default CustomHeader;