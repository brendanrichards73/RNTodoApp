import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create ({
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        borderWidth: 5,
        width: 100,
        height: 100,
        padding: 10,
        margin: 10,
        color: 'white',
        borderColor: '#f4511e',
        backgroundColor: '#82CAFF'
    },
  })
  
export default class Home extends Component {
    static navigationOptions  = {
        title: 'Home',
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
                <Text>
                Home Screen
                </Text>
                <View styles = {styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the API Fetch Screen' 
                        onPress={()=>this.props.navigation.navigate('Main')}>
                        API Screen
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the ToDo Screen' 
                        onPress={()=>this.props.navigation.navigate('ToDo')}>
                        ToDo Screen
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the Images Screen' 
                        onPress={()=>this.props.navigation.navigate('Images')}>
                        Images Screen
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );    
        }
    }

   