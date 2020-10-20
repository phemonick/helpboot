import * as React from "react";
import { Text, View } from "react-native";
import Card from "../../components/card";
import Checkbox from "../../components/checkbox";
import Input from "../../components/input";
import potholes from "../../assets/images/potholes.png";

interface TextState {
    isBoxActive: boolean;
    text: string;
}

export default class Test extends React.Component<{}, TextState> {
    state = {
        isBoxActive: false,
        text:        "ssss",
    };

    onTextChange = (text: string) => this.setState({ text });
    onCheckboxToggle = () => this.setState(prevState => ({ isBoxActive: !prevState.isBoxActive }));

    render() {
        return (
            <View style={{ padding: 16 }}>
                <Input onChange={this.onTextChange} value={this.state.text}/>
                <Checkbox
                    isActive={this.state.isBoxActive}
                    onCheck={this.onCheckboxToggle}
                    text="Remember me"
                />
                <View style={{ padding: 16 }}>
                    <Card source={potholes} onClick={this.onCheckboxToggle}>
                        <>
                            <Text>Hellokphindjnd</Text>
                            <Text>Hellokphindjnd</Text>
                            <Text>Hellokphindjnd</Text>
                            <Text>Hellokphindjnd</Text>
                            <Text>Hellokphindjnd</Text>
                            <Text>Hellokphindjnd</Text>
                        </>
                    </Card>
                </View>
            </View>
        );
    }
}
