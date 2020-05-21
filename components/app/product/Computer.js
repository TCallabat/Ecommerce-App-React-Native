/**
 * Computer.js
 */

/* Import modules */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

/* Component */
class Computer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch("http://192.168.1.21:8080")
            .then((response) => response.json())
            .then(
                (data) => this.setState({ data: data.filter(function (data) { return data.category === "computer" }) }),
                (error) => console.log(error)
            );
    }

    displayItem = ({ item }) => (
        <View style={{ flex: 1, marginHorizontal: 5, marginVertical: 5, backgroundColor: "white" }}>
            <TouchableOpacity style={{ flex: 1, margin: 6 }} onPress={() => this.props.navigation.navigate("Detail", { item: item })} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 5, flexDirection: "column" }}>
                        <View style={{ flex: 1, height: 30, flexDirection: "row" }}>
                            <Text style={{ flex: 4, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, textAlign: "left", fontWeight: "700" }}>{item.brand}</Text>
                            <Text style={{ flex: 4, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, textAlign: "right", fontWeight: "700" }}>{parseFloat(item.price).toFixed(2)} €</Text>
                            <TouchableOpacity style={{ flex: 1, margin: 6 }} onPress={() => alert("Ajout au panier " + item._id)} >
                                <Image style={{ flex: 1, resizeMode: "contain", alignSelf: "center" }} source={require("../../img/signs.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }}>
                            <Text style={{ flex: 1, height: 35, paddingVertical: 0, paddingHorizontal: 5, fontSize: 15, textAlign: "left", textAlignVertical: "center" }}>{item.title}</Text>
                            <Text style={{ flex: 1, height: 75, paddingVertical: 5, paddingHorizontal: 5, fontSize: 14, textAlign: "justify", textAlignVertical: "top" }}>{item.description}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 2, alignSelf: "center" }}>
                        <Image style={{ flex: 1, margin: 5, resizeMode: "contain" }} source={{ uri: "http://192.168.1.21:8080" + item.img1 }} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
                <View horizontal={false} style={{ flex: 1, marginHorizontal: 5 }}>
                    <FlatList data={this.state.data} renderItem={this.displayItem} keyExtractor={item => item._id} />
                </View>
            </View>
        );
    }
}

export default Computer;