import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddTodo from '../TodoApp/containers/AddTodo';

class TodoApp extends Component {
    render () {
        return (
            <View style={StyleSheet.container}>
                <AddTodo />
            </View>
        )
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})