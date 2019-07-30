import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    home: {
       justifyContent: 'center',
    },
    button: {
        justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
        borderWidth: 5,
        width: 100,
        height: 100,
        padding: 10,
        margin: 10,
        borderColor: '#4863A0',
        backgroundColor: '#82CAFF'
    },
    
    
  })
  


export default class Home extends Component {
    static navigationOptions  = {
        title: 'Home'
    }

    
    render() {
        return (
            <View styles = { styles.container}>
               
                <Text styles = {styles.home}>
                Home Screen
                </Text>
                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the API Fetch Screen' 
                        onPress={()=>this.props.navigation.navigate('Main')}>
                        API
                        Screen
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the ToDo Screen' 
                        onPress={()=>this.props.navigation.navigate('ToDo')}>
                        ToDo
                        Screen
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the Images Screen' 
                        onPress={()=>this.props.navigation.navigate('Images')}>
                        Images
                        Screen
                        </Text>
                    </TouchableOpacity>
            </View>
        );    
        }
    }

   