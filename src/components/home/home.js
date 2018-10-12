import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import LottieView from 'lottie-react-native';
import InsButton from "../../common/InsButton";
import {DrawerNavigator} from 'react-navigation';
import InsCard from "../../common/InsCard";

export default class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>
                        Choose What you want
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>

                    <View  style={{flexDirection: 'column', width: 0,
                        flexGrow: 1}}>
                        <InsCard backColor={"#BA68C8"} anim={"animation-w248-h187"} {...this.props}/>
                        <InsCard backColor={"#4DD0E1"} anim={"moving_forward"} {...this.props}/>
                        <InsCard backColor={"#4DD0E1"} anim={"moving_forward"} {...this.props}/>
                        <InsCard backColor={"#4DD0E1"} anim={"moving_forward"} {...this.props}/>
                    </View>
                    <View  style={{flexDirection: 'column', width: 0,
                        flexGrow: 1}}>
                        <InsCard backColor={"#4CAF50"} anim={"animation-w248-h187"} {...this.props}/>
                        <InsCard backColor={"#FFC107"} anim={"animation-w248-h187"} {...this.props}/>
                        <InsCard backColor={"#ef5350"} anim={"animation-w248-h187"} {...this.props}/>
                        <InsCard backColor={"#ef5350"} anim={"animation-w248-h187"} {...this.props}/>
                        <InsCard backColor={"#ef5350"} anim={"animation-w248-h187"} {...this.props}/>
                    </View>
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

