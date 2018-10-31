import React from "react";
import { Platform, StatusBar, Dimensions } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";

import LoginScreen from "./screens/login.screen";
import CreateProjectScreen from "./screens/createProject.screen";
import SidebarScreen from "./common/screens/sidebar.screen";
import AllProjectScreen from "./screens/allProject.screen";

export const SignedOut = createStackNavigator({
    SignIn: {
        screen: LoginScreen,
        navigationOptions: {
            title: "Sign In"
        }
    }
}, {
    headerMode: 'none'
});

export const SignedIn = createDrawerNavigator(
    {
        CreateProject: CreateProjectScreen,
        AllProject: AllProjectScreen
    },
    {
        intialRouteName: CreateProjectScreen,
        drawerWidth: Dimensions.get('window').width - 100,
        contentComponent: SidebarScreen
    }
);

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        }, {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};