/**
 * Splashscreen.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, ActivityIndicator, ImageBackground, Image } from 'react-native';

/* Component */
class Splashscreen extends Component {

    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate("App") }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1, width: "100%", resizeMode: "cover" }} source={require('../img/IMG_1428.jpg')} >
                    <Image style={{ flex: 1, width: "100%", resizeMode: "contain" }} source={require('../img/logo.png')} />
                    <ActivityIndicator size="large" color="lightgrey" />
                </ImageBackground >
            </View >
        );
    }
}

/* Export */
export default Splashscreen;
