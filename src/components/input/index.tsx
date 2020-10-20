import * as React from "react";
import {
    KeyboardTypeOptions, StyleProp, TextInput, TextStyle, View,
} from "react-native";
import styles from "./styles";

type ContentType = | "none"
| "URL"
| "addressCity"
| "addressCityAndState"
| "addressState"
| "countryName"
| "creditCardNumber"
| "emailAddress"
| "familyName"
| "fullStreetAddress"
| "givenName"
| "jobTitle"
| "location"
| "middleName"
| "name"
| "namePrefix"
| "nameSuffix"
| "nickname"
| "organizationName"
| "postalCode"
| "streetAddressLine1"
| "streetAddressLine2"
| "sublocality"
| "telephoneNumber"
| "username"
| "password"
| "newPassword"
| "oneTimeCode";

interface InputProps {
    containerStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<TextStyle>;
    value: string;
    defaultValue?: string;
    placeHolder?: string;
    keyboardType?: KeyboardTypeOptions;
    contentType?: ContentType;
    isTextArea?: boolean;
    secureTextEntry?: boolean;
    numberOfLines?: number;
    autoCompleteType?: | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-number"
    | "email"
    | "name"
    | "password"
    | "postal-code"
    | "street-address"
    | "tel"
    | "username"
    | "off";
    onChange(text: string): void;
}

Input.defaultProps = { numberOfLines: 1 };

export default function Input(props: InputProps) {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <TextInput
                value={props.value}
                defaultValue={props.defaultValue}
                placeholder={props.placeHolder}
                style={[styles.input, props.inputStyle]}
                keyboardType={props.keyboardType}
                textContentType={props.contentType}
                multiline={props.isTextArea}
                numberOfLines={props.numberOfLines}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChange}
                autoCompleteType={props.autoCompleteType}
            />
        </View>
    );
}
