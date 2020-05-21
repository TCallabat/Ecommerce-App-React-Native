/**
 * AuthHome.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/* Component */
class AuthHome extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Bienvenue</Text>
                <View style={{ width: "75%", marginTop: 25 }}>
                    <TouchableOpacity style={styles.buttonBigView} onPress={() => this.props.navigation.navigate("Profile")} >
                        <Text style={styles.buttonBigText}>Voir profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBigView} onPress={() => this.props.navigation.navigate("SignIn")}  >
                        <Text style={styles.buttonBigText}>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBigView} onPress={() => this.props.navigation.navigate("SignUp")} >
                        <Text style={styles.buttonBigText}>Créer un compte</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

/* Export */
export default AuthHome;

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
});  