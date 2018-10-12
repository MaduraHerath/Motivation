import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableHighlight, Text, View} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import LottieView from 'lottie-react-native';


export default class InsCard extends Component {
    componentDidMount() {
        console.log("Props", this.props)
    }

    constructor(props) {
        super(props);
    }

    render() {
        let {backColor,anim} = this.props;
        animation= "animation-w248-h187"
        return (
            <View style={{
                backgroundColor:  backColor,
                flex: 1,
                margin: 5,
                // alignItems: "center",
                justifyContent: 'center'
            }}>
                <LottieView
                    source={require(`../source/animation-w248-h187.json`)}
                    autoPlay
                    loop
                />
                <View style={{padding:5}}>
                    <Text style={{color: "white"}}>This content will goes inside </Text>
                </View>
            </View>
        )
    }
}
