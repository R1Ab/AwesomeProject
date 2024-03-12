import { Button,ColorValue} from "react-native";
import { } from "../utils/dimens";

interface ButtonProps {
    label: string;
    colors: ColorValue;
    // colours:ColorValue
}

function CustomButton(props: ButtonProps): JSX.Element {
    return (
        <Button 
            title={props.label}
            color={props.colors}
        />
    );
}
export default CustomButton;