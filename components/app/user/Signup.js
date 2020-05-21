/**
 * Login.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

/* Component */
class Signup extends Component {
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
                <Text style={styles.title}>Enregistrement</Text>

                {/* Input container */}
                <View style={{ width: "75%", marginTop: 25 }}>

                    {/* Input lastname */}
                    <View style={styles.inputView} >
                        <TextInput style={styles.inputText} placeholder="nom..." placeholderTextColor="grey" onChangeText={text => this.setState({ lastname: text })} />
                    </View>

                    {/* Input firstname */}
                    <View style={styles.inputView} >
                        <TextInput style={styles.inputText} placeholder="prénom..." placeholderTextColor="grey" onChangeText={text => this.setState({ firstname: text })} />
                    </View>

                    {/* Input email */}
                    <View style={styles.inputView} >
                        <TextInput style={styles.inputText} placeholder="email..." placeholderTextColor="grey" onChangeText={text => this.setState({ email: text })} />
                    </View>

                    {/* Input password */}
                    <View style={styles.inputView} >
                        <TextInput style={styles.inputText} secureTextEntry placeholder="mot de passe..." placeholderTextColor="grey" onChangeText={text => this.setState({ password: text })} />
                    </View>

                    {/* Input password confirm */}
                    <View style={styles.inputView} >
                        <TextInput style={styles.inputText} secureTextEntry placeholder="confirmer mot de passe..." placeholderTextColor="grey" onChangeText={text => this.setState({ password: text })} />
                    </View>

                </View>

                {/* Button container */}
                <View style={{ width: "75%", marginTop: 25 }}>

                    {/* Button create account */}
                    <TouchableOpacity style={styles.buttonBigView} onPress={() => alert("Message compte créé")} >
                        <Text style={styles.buttonBigText}>créer un compte</Text>
                    </TouchableOpacity>

                </View>

            </View >
        );
    }
}

/* Export */
export default Signup;

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
        backgroundColor: "white",
        borderRadius: 15,
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    inputText: {
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