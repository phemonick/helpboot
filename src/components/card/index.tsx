import * as React from "react";
import {
    Image, ImageSourcePropType, ImageStyle, StyleProp, TouchableOpacity, View, ViewStyle,
} from "react-native";
import styles from "./styles";

interface CardProps {
    source?: ImageSourcePropType;
    children: React.ReactElement;
    imageStyle?: StyleProp<ImageStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    onClick?(): void;
}

export default function Card(props: CardProps) {
    const content = (
        <View style={[styles.cardContainer, props.containerStyle]}>
            {props.source ? <Image source={props.source} style={[styles.imageStyle, props.imageStyle]} /> : null}
            <View style={styles.childrenWrapper}>
                {props.children}
            </View>
        </View>
    );

    return !!props.onClick
        ? (
            <TouchableOpacity activeOpacity={0.8} onPress={props.onClick}>
                {content}
            </TouchableOpacity>
        )
        : content;
}
