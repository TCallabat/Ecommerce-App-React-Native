/**
 * Forget.js
 */


/* Import modules */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* Component */
class Forget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <View>

                <Text>Mot de passe oublié</Text>

            </View >
        );
    }
}

/* Export */
export default Forget;
