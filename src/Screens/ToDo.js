import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TodoApp from '../TodoApp/TodoApp';
import store from '../TodoApp/store';
import { Provider } from 'react-redux';

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
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )    
    }

}