/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Animated,
    Easing
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import Welcome from "./src/components/welcome/welcome";
import Home from "./src/components/home/home";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
    render() {
        return (
            <StackView/>

        );
    }
}
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return {transform: [{translateX}]}
        },
    }
}



const StackView = StackNavigator({
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },

    },
    {
        initialRouteName: 'Welcome',
        transitionConfig,
        portraitOnlyMode: true
    });

