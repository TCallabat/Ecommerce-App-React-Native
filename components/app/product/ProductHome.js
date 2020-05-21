/**
 * ProductHome.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

/* Component */
class ProductHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
                <TouchableOpacity style={{ flex: 1, margin: 10, borderRadius: 25 }} onPress={() => this.props.navigation.navigate("Computer")} >
                    <ImageBackground style={{ flex: 1, width: "100%", resizeMode: "cover" }} source={require('../../img/computer.jpg')} >
                        <Text style={{ flex: 1, fontSize: 40, textAlign: "center", textAlignVertical: "center", color: "white", fontWeight: "bold", fontStyle: "italic", textShadowOffset: { width: -1, height: 1 }, textShadowColor: "black", textShadowRadius: 10 }} >Ordinateurs</Text>
                    </ImageBackground >
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, margin: 10, borderRadius: 25 }} onPress={() => this.props.navigation.navigate("Smartphone")} >
                    <ImageBackground style={{ flex: 1, width: "100%", resizeMode: "cover" }} source={require('../../img/phone.jpg')} >
                        <Text style={{ flex: 1, fontSize: 40, textAlign: "center", textAlignVertical: "center", color: "white", fontWeight: "bold", fontStyle: "italic", textShadowOffset: { width: -1, height: 1 }, textShadowColor: "black", textShadowRadius: 10 }} >Téléphones</Text>
                    </ImageBackground >
                </TouchableOpacity>
            </View >
        );
    }
}

/* Export */
export default ProductHome;
