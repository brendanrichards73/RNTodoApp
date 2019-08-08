import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create ({
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    button: {
        width: 100,
        height: 100,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderColor: '#f4511e',
        borderWidth: 2,
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
            <View style = {styles.buttonContainer}>
    
                <View>
                    <TouchableOpacity>
                        <Text style = {styles.button}
                        title='Go to the API Fetch Screen' 
                        onPress={()=>this.props.navigation.navigate('API')}>
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

   