import * as React from "react";
import { Colour } from "../styles";
import {Platform, StyleProp, Text, TouchableOpacity, ViewStyle} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

interface RadioSelectProps {
    text?: string;
    isActive: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    onSelect(): void;
}

export default function RadioSelect(props: RadioSelectProps) {
    const { text, onSelect, isActive } = props;
    const isAndroid = Platform.OS === "android";

    return (
        <TouchableOpacity onPress={onSelect} style={[styles.container, props.containerStyle]} activeOpacity={0.8}>
            {isActive
                ? (
                    <Icon
                        name={isAndroid ? "md-radio-button-on" : "ios-radio-button-on"}
                        color={Colour.checkBlue}
                        size={30}
                        style={{ height: 30, textAlign: "center", width: 30 }}
                    />
                )
                : (
                    <Icon
                        name={isAndroid ? "md-radio-button-off" : "ios-radio-button-off"}
                        color={Colour.checkBlue}
                        size={30}
                        style={{ height: 30, textAlign: "center", width: 30 }}
                    />
                )
            }
            {text ? <Text style={styles.checkText}>{text}</Text> : null}
        </TouchableOpacity>
    );
}
