import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ToDo extends Component {
    static navigationOptions = {
        title: 'ToDo'
    }


    render() {
        return (
            <View>
                <Text>ToDo Screen</Text>
            </View>
        )    
    }

}