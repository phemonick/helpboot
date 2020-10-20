import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

interface PropTypes {
    currentStep: number;
    totalStep: number;
    stepTitle: string;
    children?: React.ReactNode;
    onCloseClick(): void;
}

export default function ProjectCreationHeader(props: PropTypes) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={props.onCloseClick}>
                <Icon name="md-close" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.stepTitle}>{`Step ${props.currentStep} of ${props.totalStep}`}</Text>
            <Text style={styles.formTitle}>{props.stepTitle}</Text>
            {props.children}
        </View>
    );
}
