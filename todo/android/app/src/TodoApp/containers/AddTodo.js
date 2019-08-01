import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class AddTodo extends Component {
    render () {
        return (
           <View style={{ flexDirection: 'row'}}>
               <TextInput
                   placeholder='Eg, Create New Video'
                   style={{borderWidth: 1, borderColor: '#f2f2e1',
                   backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
               />
           </View>
        )
    }
}
export default AddTodo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})