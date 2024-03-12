import React, { useState } from "react";
import { Text, View } from "react-native";
import Colors from "../utils/colors";
import Button from "../components/Button";

const TwoButtonScrren = (): React.ReactElement => {
    const [count, setCount] = useState(0);


    const increement = () => {
        setCount(count + 1)
    };
    const dcreement = () => {
        setCount(count - 1);
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>

            <Text style={{ fontSize: 20, alignSelf: "center", marginTop: 40 }}>
                Count :{count}
            </Text>

            <Button title="Increement"
                onButtonClick={increement}
            />

            <Button title="Decreement"
                onButtonClick={dcreement}
            />

        </View>
    );
}
export default TwoButtonScrren;