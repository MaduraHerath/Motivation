import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LottieView from 'lottie-react-native';
import InsButton from "../../common/InsButton";

export default class Welcome extends React.Component {
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
                    <LottieView
                        source={require('../../source/animation.json')}
                        autoPlay
                        loop
                    />
                </View>
                <View style={styles.button}>
                    <InsButton btnColor={"#b71c1c"} color={"#FAFAFA"} onNavigate ='Home' {...this.props}>Next</InsButton>
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