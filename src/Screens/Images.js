import React, { Component } from 'react';
import { Platform, StyleSheet, View, TextInput, } from 'react-native';

export default class Images extends Component {
    static navigationOptions  = {
        title: 'Images',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    render() {
        return (
            <View>
                <TextInput
                   placeholder='Search for a Country'
                   style={{borderWidth: 10, borderColor: '#f2f2e1',
                   backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5, marginTop: 20}}
                   />
            </View>
        )    
    }

}
