/**
 * Profile.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* Component */
class Profile extends Component {
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
                <Text style={styles.title}>Mon compte</Text>
                <View style={{ width: "75%", marginTop: 25 }}>

                    <View style={styles.inputView} >
                        <Text style={styles.inputText}>.. Nom ..</Text>
                    </View>
                    <View style={styles.inputView} >
                        <Text style={styles.inputText}>.. Prénom ..</Text>
                    </View>
                    <View style={styles.inputView} >
                        <Text style={styles.inputText}>.. Email ..</Text>
                    </View>
                </View>
            </View >
        );
    }
}

/* Export */
export default Profile;

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