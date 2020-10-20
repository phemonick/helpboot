import {
    Image,
    Text,
    View,
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Routes } from "../../navigation/routes";
import Button from "../../components/buttons";
import React from "react";
import styles from "./styles";
import unwrapImg from "../../assets/images/undraw.png";
import withSafeAreaView from "../../components/withSafeAreaView";

function GetStarted(props: NavigationInjectedProps) {
    function goToLogin() {
        props.navigation.navigate(Routes.Login);
    }

    return (
        <View style={styles.body}>
            <View>
                <Image style={styles.image} source={unwrapImg} />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                        Help make our city better. Join a
                </Text>
                <Text style={styles.description}>network of volunteers</Text>
            </View>
            <Button
                onPress={goToLogin}
                text="GET STARTED"
                containerStyle={styles.btn}
                textStyle={styles.buttonText}
            />
        </View>
    );
}

export default withSafeAreaView(GetStarted);
