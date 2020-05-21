/**
 * Detail.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

/* Component */
class Detail extends Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, margin: 10 }}>
                <ScrollView style={{ flex: 1 }} horizontal={false}>
                    <View style={{ flex: 1, height: 30, flexDirection: "row" }}>
                        <Text style={{ flex: 4, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, textAlign: "left", fontWeight: "700" }}>{this.props.navigation.state.params.item.brand}</Text>
                        <Text style={{ flex: 4, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, textAlign: "right", fontWeight: "700" }}>{parseFloat(this.props.navigation.state.params.item.price).toFixed(2)} €</Text>
                        <TouchableOpacity style={{ flex: 1, margin: 6 }} onPress={() => alert("Ajout au panier " + this.props.navigation.state.params.item._id)} >
                            <Image style={{ flex: 1, resizeMode: "contain", alignSelf: "center" }} source={require("../../img/signs.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={{ flex: 1, height: 40, paddingVertical: 0, paddingHorizontal: 10, fontSize: 16, textAlign: "left", textAlignVertical: "center" }}>{this.props.navigation.state.params.item.title}</Text>
                        <Text style={{ flex: 1, height: 65, paddingVertical: 5, paddingHorizontal: 10, fontSize: 14, textAlign: "justify", textAlignVertical: "top" }}>{this.props.navigation.state.params.item.description}</Text>
                        <Text style={{ flex: 1, paddingVertical: 5, paddingHorizontal: 10, fontSize: 14, textAlign: "justify", textAlignVertical: "top" }}>{this.props.navigation.state.params.item.detail}</Text>
                    </View>
                    <Image style={{ height: 250, width: 250, margin: 5, resizeMode: "contain", alignSelf: "center" }} source={{ uri: "http://192.168.1.21:8080" + this.props.navigation.state.params.item.img1 }} />
                    <Image style={{ height: 250, width: 250, margin: 5, resizeMode: "contain", alignSelf: "center" }} source={{ uri: "http://192.168.1.21:8080" + this.props.navigation.state.params.item.img2 }} />
                    <Image style={{ height: 250, width: 250, margin: 5, resizeMode: "contain", alignSelf: "center" }} source={{ uri: "http://192.168.1.21:8080" + this.props.navigation.state.params.item.img3 }} />
                </ScrollView>
            </View >
        );
    }
}

/* Export */
export default Detail;
