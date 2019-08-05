import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {deleteTodo} from '../actions/index';
import AntIcon from 'react-native-vector-icons/AntDesign';



class DeleteTodo extends Component {

    state = {
        id: todo.id
    }

    deleteTodo = (id) => {
        this.props.dispatch(deleteTodo(id))
        
    }

    render () {
        return (
           <View style={{ flexDirection: 'row'}}>
               <TouchableOpacity onPress={() => this.deleteTodo(id)}>
                   <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems:'center', justifyContent: 'center'}}>
                       <AntIcon name='minus' size={30} style={{ color: '#de9595', padding: 10}} />
                   </View>
               </TouchableOpacity>
               
           </View>
        )
    }
}
export default connect()(DeleteTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})