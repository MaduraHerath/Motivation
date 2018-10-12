import React from 'react';
import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import InsButton from "../../common/InsButton";
import {DrawerNavigator} from 'react-navigation';
import {RNCamera} from 'react-native-camera';

export default class Home extends React.Component {
    componentDidMount() {
    }

    takePicture = async function () {
        if (this.camera) {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri);
        }
    };

    render() {
        return (

            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}

                    onTextRecognized={(d) => {
                        if (d.textBlocks.length > 0) {
                            for (var i = 0; i < d.textBlocks.length; i++) {
                                var isnum = /^\d+$/.test(d.textBlocks[i].value);
                                if (!isNaN(d.textBlocks[i].value) && isnum) {
                                    console.log('onTextRecognized', d.textBlocks[i]);
                                    console.log('onTextRecognized', isnum);

                                    if (d.textBlocks[i].value.length > 12) {
                                        this.props.navigation.navigate('Welcome')
                                        alert(parseInt(d.textBlocks[i].value))
                                    }
                                }
                            }
                        }


                    }}
                />
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                    <TouchableOpacity
                        onPress={this.takePicture.bind(this)}
                        style={styles.capture}
                    >
                        <Text style={{fontSize: 14}}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});

