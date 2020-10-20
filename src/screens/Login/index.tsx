import { NavigationInjectedProps } from "react-navigation";
import { Routes } from "../../navigation/routes";
import { styles } from "./styles";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Button from "../../components/buttons";
import Input from "../../components/input";
import React, { useState } from "react";
import withSafeAreaView from "../../components/withSafeAreaView";

function Login(props: NavigationInjectedProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginAction() {
        props.navigation.navigate(Routes.AppStack);
    }

    function gotoSignUp() {
        props.navigation.navigate(Routes.SignUp);
    }

    function gotoHome() {
        props.navigation.navigate(Routes.AppStack);
    }

    return (
        <View style={styles.body}>
            <View  style={styles.logo}>
                <Text style={styles.logoText}> HB </Text>
            </View>
            <View>
                <Text style={styles.description}>Please Login</Text>
                <>
                    <Input
                        placeHolder="joe@company.com"
                        onChange={setEmail}
                        containerStyle={[styles.inputContainerStyle, styles.spaceBotom]}
                        value={email}
                        autoCompleteType={"email"}
                        keyboardType={"email-address"}
                    />
                    <Input
                        placeHolder="Password"
                        containerStyle={styles.inputContainerStyle}
                        onChange={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </>
                <View
                    style={styles.authAction}
                >
                    <Button
                        onPress={loginAction}
                        text="Login"
                        containerStyle={styles.loginBtn}
                        textStyle={styles.loginBtnText}
                    />
                    <TouchableOpacity
                        onPress={gotoSignUp}
                    >
                        <Text style={styles.largeText}> Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Button
                onPress={gotoHome}
                containerStyle={styles.btn}
                text={"SKIP"}
                textStyle={styles.skipText}
            />
        </View>
    );
}

export default withSafeAreaView(Login);
