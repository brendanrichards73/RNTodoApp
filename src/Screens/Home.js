import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {registerFirebase} from './utils/FirebaseHelpers';
import firebase from 'react-native-firebase';
import strings from './utils/strings'

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

    componentDidMount() {
        registerFirebase();
        this.messageListener = firebase.messaging().onMessage((message) => {
            console.log(JSON.stringify(message));
          });

          this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            alert(body);
        });
    }

    componentWillUnmount() {
        this.notificationListener()
        this.messageListener()
    }

    navigateToAPIFetch = () => this.props.navigation.navigate('API')

    render() {
        return (
            <View style = {styles.buttonContainer}>
                <Text style = {styles.button}
                title={strings.GO_API_TITLE} 
                onPress={this.navigateToAPIFetch}>
                World Countries
                </Text>
                <Text style = {styles.button}
                title='Go to the Maps Screen' 
                onPress={()=>this.props.navigation.navigate('Maps')}>
                Maps
                </Text>
                <Text style = {styles.button}
                title='Go to the ToDo Screen' 
                onPress={()=>this.props.navigation.navigate('ToDo')}>
                Notes
                </Text>
            </View>
        );    
    }
}

   