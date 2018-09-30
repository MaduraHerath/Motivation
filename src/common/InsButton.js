import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableHighlight,Text, View} from 'react-native';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
import PropTypes from 'prop-types';

export default class InsButton extends Component {
    componentDidMount(){
        console.log("Props",this.props)
    }
    constructor(props) {
        super(props);
    }
    render() {
        let {btnColor,color} = this.props
        console.log("btncolors",btnColor)
        console.log("colors",color)
        return (
            <View style={styles.main} onPress={this.onPress} >
                <TouchableHighlight style={[styles.button,{backgroundColor:btnColor},{color:color}]} onPress={() =>  {this.props.navigation.navigate(this.props.onNavigate)}} >
                    <Text style={{color:color}}>
                        {this.props.children}
                    </Text>
                </TouchableHighlight>
            </View>

        );
    }


}
InsButton.propTypes = {
    color: PropTypes.string,
    btnColor: PropTypes.string,

};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 6,
        margin: 0,
        borderBottomColor: 'white',
        borderRadius: 10,
        width: width * 0.8


    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderRadius: 100,
        margin: 20
    },
    main: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }

})

