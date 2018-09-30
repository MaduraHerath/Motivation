import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LottieView from 'lottie-react-native';
import InsButton from "../../common/InsButton";

export default class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>
                        All You need is a simple Motivation
                    </Text>
                </View>
                <View style={{flex: 1}}>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        paddingTop: 20,
        color: '#e53935',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 20
    },
});

