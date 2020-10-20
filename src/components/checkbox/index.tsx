import * as React from "react";
import { Colour } from "../styles";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

interface CheckboxProps {
    text?: string;
    isActive: boolean;
    onCheck(): void;
}

export default function Checkbox(props: CheckboxProps) {
    const { text, onCheck, isActive } = props;

    return (
        <TouchableOpacity onPress={onCheck} style={styles.container} activeOpacity={0.8}>
            <View style={styles.checkWrapper}>
                {isActive
                    ? (
                        <Icon
                            name="ios-checkmark"
                            color={Colour.checkBlue}
                            size={30}
                            style={{ height: 30, textAlign: "center", width: 30 }}
                        />
                    )
                    : null
                }
            </View>
            {text ? <Text style={styles.checkText}>{text}</Text> : null}
        </TouchableOpacity>
    );
}
