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

function SignUp(props: NavigationInjectedProps) {
    const [username, setUserNme] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signUpAction() {
        props.navigation.navigate(Routes.AppStack);
    }

    function gotoLogin() {
        props.navigation.navigate(Routes.Login);
    }

    function gotoHome() {
        props.navigation.navigate(Routes.AppStack);
    }

    return (
        <View style={styles.body}>
            <View>
                <View  style={styles.logo}>
                    <Text style={styles.logoText}> HB </Text>
                </View>
                <View>
                    <Text style={styles.description}>Please Signup</Text>
                    <>
                        <Input
                            placeHolder="Username"
                            onChange={setUserNme}
                            containerStyle={[styles.inputContainerStyle, styles.spaceBotom]}
                            value={username}
                        />
                        <Input
                            placeHolder="joe@company.com"
                            onChange={setEmail}
                            containerStyle={[styles.inputContainerStyle, styles.spaceBotom]}
                            value={email}
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
                            onPress={signUpAction}
                            text="Signup"
                            containerStyle={styles.signUpBtn}
                            textStyle={styles.signUpBtnText}
                        />
                        <TouchableOpacity
                            onPress={gotoLogin}
                        >
                            <Text style={styles.largeText}> Back to Login</Text>
                        </TouchableOpacity>
                    </View>
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

export default withSafeAreaView(SignUp);
