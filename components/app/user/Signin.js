/**
 * Login.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

/* Component */
class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <View style={styles.container}>

                {/* Title */}
                <Text style={styles.title}>Connexion</Text>

                {/* Input container */}
                <View style={{ width: "75%", marginTop: 25 }}>

                    {/* Input email */}
                    <View style={styles.inputView} >
                        <Image style={styles.inputImage} source={require('../../img/email.png')} />
                        <TextInput style={styles.inputText} placeholder="email..." placeholderTextColor="grey" onChangeText={text => this.setState({ email: text })} />
                    </View>

                    {/* Input password */}
                    <View style={styles.inputView} >
                        <Image style={styles.inputImage} source={require('../../img/password.png')} />
                        <TextInput style={styles.inputText} secureTextEntry placeholder="mot de passe..." placeholderTextColor="grey" onChangeText={text => this.setState({ password: text })} />
                    </View>

                </View>

                {/* Button container */}
                <View style={{ width: "75%", marginTop: 25 }}>

                    {/* Button login */}
                    <TouchableOpacity style={styles.buttonBigView} onPress={() => alert("Message connexion réussie")} >
                        <Text style={styles.buttonBigText}>se connecter</Text>
                    </TouchableOpacity>

                    {/* Button reset password */}
                    <TouchableOpacity style={styles.buttonSmallView} onPress={() => this.props.navigation.navigate("Forget")}>
                        <Text style={styles.buttonSmallText}>Mot de passe oublié ?</Text>
                    </TouchableOpacity>

                </View>

            </View >
        );
    }
}

/* Export */
export default Signin;

/* Styles */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 35,
        color: "black",
        textAlign: "center",
    },
    inputView: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 15,
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    inputImage: {
        width: 15,
        height: 15,
        alignSelf: "center",
    },
    inputText: {
        paddingLeft: 15,
        textAlignVertical: "center",
    },
    buttonBigView: {
        backgroundColor: "cadetblue",
        borderRadius: 25,
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    buttonBigText: {
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "700",
    },
    buttonSmallView: {
        marginTop: 10,
    },
    buttonSmallText: {
        textAlign: "center",
        textTransform: "none",
        fontWeight: "600",
        fontSize: 13,
    },
});  