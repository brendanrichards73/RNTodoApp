import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'; 
import { connect } from 'react-redux';
import {addTodo} from '../actions/index';

class AddTodo extends Component {

    state = {
        text:''
    }

    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render () {
        return (
           <View style={{ flexDirection: 'row'}}>
               <TextInput
                    onChangeText={(text) => this.setState({ text })} 
                    value={this.state.text}
                   placeholder='Enter New Todo'
                   style={{borderWidth: 1, borderColor: '#f2f2e1',
                   backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
               />
               <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                   <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems:'center', justifyContent: 'center'}}>
                       <AntIcon name='plus' size={30} style={{ color: '#de9595', padding: 10}} />
                   </View>
               </TouchableOpacity>
           </View>
        )
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})