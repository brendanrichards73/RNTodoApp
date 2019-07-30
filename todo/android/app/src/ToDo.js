import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ToDo extends Component {
    static navigationOptions = {
        title: 'ToDo',
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
                <Text>ToDo Screen</Text>
            </View>
        )    
    }

}