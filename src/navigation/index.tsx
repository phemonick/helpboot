import * as React from "react";
import { Colour } from "../components/styles";
import {
    createAppContainer, createSwitchNavigator, NavigationRoute, NavigationScreenProp,
} from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Routes, TabIcons } from "./routes";
import Category from "../screens/Category";
import GetStarted from "../screens/GetStarted";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/AntDesign";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import styles from "./styles";
import Test from "../screens/Test";
import withSafeAreaView from "../components/withSafeAreaView";

interface TabBarIconProps {
    focused: boolean;
    horizontal: boolean;
    tintColor: string;
}

const getTabIcon = (iconProps: TabBarIconProps, routeName: string): React.ReactElement<any> => {
    const { tintColor } = iconProps;
    const iconName = (TabIcons as any)[routeName];
    return <Icon name={iconName} color={tintColor || Colour.primary} size={30} style={{ height: 34 }} />;
};

const AuthStack = createStackNavigator({
    [Routes.GetStarted]: GetStarted,
    [Routes.Login]:      Login,
    [Routes.SignUp]:     SignUp,
}, {
    headerMode:       "none",
    initialRouteName: Routes.GetStarted,
});

const AppStack = createBottomTabNavigator({
    [Routes.HOME]:          withSafeAreaView(Home),
    [Routes.Explore]:       withSafeAreaView(Category),
    [Routes.Notifications]: Test,
    [Routes.Profile]:       Test,
}, {
    defaultNavigationOptions: ({ navigation }: { navigation: NavigationScreenProp<NavigationRoute> }): object => {
        const { routeName } = navigation.state;
        return { tabBarIcon: (iconProps: TabBarIconProps) => getTabIcon(iconProps, routeName) };
    },
    initialRouteName: Routes.HOME,
    tabBarOptions:    {
        activeTintColor:     Colour.primary,
        inactiveTintColor:   Colour.textColor,
        keyboardHidesTabBar: true,
        labelStyle:          styles.label,
        showIcon:            true,
        style:               styles.tab,
    },
});

const Navigation = createSwitchNavigator({
    [Routes.AppStack]:  AppStack,
    [Routes.AuthStack]: AuthStack,
},
{ initialRouteName: Routes.AuthStack });

export default createAppContainer(Navigation);
